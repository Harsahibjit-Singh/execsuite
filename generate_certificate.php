<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $names = explode(',', trim($_POST['name']));
    $eventName = $_POST['eventName'];
    $organizedBy = $_POST['organizedBy'];
    $chapterName = $organizedBy === 'chapter' ? $_POST['chapterName'] : '';
    $eventDuration = $_POST['eventDuration']??'';
    $singleDate = $_POST['singleDate'] ?? '';
    $startDate = $_POST['startDate'] ?? '';
    $endDate = $_POST['endDate'] ?? '';
    $logoUploaded = isset($_FILES['logoUpload']) && $_FILES['logoUpload']['error'] === UPLOAD_ERR_OK;
    // Handle logo upload
    $logoPath = '';
    if ($logoUploaded) {
        $uploadDir = 'uploads/';
        $logoPath = $uploadDir . basename($_FILES['logoUpload']['name']);
        move_uploaded_file($_FILES['logoUpload']['tmp_name'], $logoPath);
    }

    // Prepare a ZIP archive
    $zip = new ZipArchive();
    $zipFileName = 'certificates.zip';
    
    // Open the ZIP archive
    if ($zip->open($zipFileName, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
        exit("Failed to create ZIP file.");
    }

    // Generate certificates and add them to the ZIP
    foreach ($names as $name) {
        $name = trim($name);

        // Load the certificate template
        $certificate = imagecreatefrompng('template.png');
        $black = imagecolorallocate($certificate, 0, 0, 0);
        $red = imagecolorallocate($certificate, 255, 0, 0); // Red color
        $blue = imagecolorallocate($certificate, 0, 0, 128); // Blue color
        $green = imagecolorallocate($certificate, 0, 255, 0); // Green color
        $fontPath = 'fonts\times.TTF'; // Specify the path to your font file

        // Get the image dimensions
        $imageWidth = imagesx($certificate); // Width of the certificate image

        // Measure the bounding box of the text
        $textBoundingBox = imagettfbbox(72, 0, $fontPath, $name);
        $textWidth = $textBoundingBox[2] - $textBoundingBox[0]; // Text width

        // Calculate the X-coordinate for centering
        $x = (int)(($imageWidth - $textWidth) / 2);

        // Add the text to the certificate, centered
        imagettftext($certificate, 72, 0, $x, 800, $blue, $fontPath, $name); // Center-aligned Name
        
        // Add text to the certificate
        // imagettftext($certificate, 72, 0, 770, 700, $black, $fontPath, $name); // Name
        imagettftext($certificate, 20, 0, 316, 893, $black, $fontPath, $eventName); // Event Name
        imagettftext($certificate, 18, 0, 100, 300, $black, $fontPath, $organizedBy === 'chapter' ? $chapterName : 'Core'); // Organizer
        imagettftext($certificate, 18, 0, 100, 350, $black, $fontPath, $eventDuration === 'singleday' ? $singleDate : "$startDate - $endDate"); // Date

        // Add logo if uploaded
        if ($logoUploaded) {
            $logo = imagecreatefrompng($logoPath);
            imagecopy($certificate, $logo, 500, 100, 0, 0, imagesx($logo), imagesy($logo));
            imagedestroy($logo);
        }

        // Save the certificate temporarily
        ob_start();
        imagepng($certificate);
        $imageData = ob_get_clean();
        imagedestroy($certificate);

        // Add the certificate to the ZIP file
        $zip->addFromString("{$name}_certificate.png", $imageData);
    }

    // Close the ZIP archive
    $zip->close();

    // Set headers to download the ZIP file
    header('Content-Type: application/zip');
    header('Content-Disposition: attachment; filename="' . $zipFileName . '"');
    header('Content-Length: ' . filesize($zipFileName));

    // Output the ZIP file for download
    readfile($zipFileName);

    // Clean up
    unlink($zipFileName);
    if ($logoUploaded) {
        unlink($logoPath);
    }
    exit;
} else {
    echo "Invalid request.";
}
?>