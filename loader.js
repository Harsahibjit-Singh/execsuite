document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Fetch the loader HTML with embedded CSS
        const response = await fetch("loader.html");
        if (!response.ok) throw new Error("Failed to load loader.html");

        const loaderHTML = await response.text();

        // Insert the loader HTML into the page
        const loaderContainer = document.createElement("div");
        loaderContainer.innerHTML = loaderHTML;
        document.body.appendChild(loaderContainer);

        // Initialize animations and progress bar
        const cusbText = document.getElementById("ieee-cusb-text");
        const cusbTextContent = "IEEE CUSB";
        let blinkIndex = 0;

        // Create blinking effect for "IEEE CUSB"
        cusbTextContent.split("").forEach((letter) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 1;
            span.style.transition = "opacity 0.5s";
            cusbText.appendChild(span);
        });

        const spans = cusbText.querySelectorAll("span");
        setInterval(() => {
            spans.forEach((span, index) => {
                span.style.opacity = index === blinkIndex ? 0 : 1;
            });
            blinkIndex = (blinkIndex + 1) % spans.length;
        }, 300);
        let quotes;
        if (window.location.pathname === "/eventregistration.html") {
            // Display the specific message for this page
             quotes = [ "Event Creation In Progress !!"];
        }
        else{
            // Handle random quotes
             quotes = [
                "Innovation is the key to success.",
                "Empowering technology, one step at a time.",
                "IEEE inspires global progress.",
                "Dream big, innovate bigger.",
                "Tech drives the future.",
                "Collaboration sparks innovation.",
                "Engineering a better tomorrow.",
            ];
        }
        const quoteText = document.getElementById("quote-text");
        quoteText.textContent = quotes[Math.floor(Math.random() * quotes.length)];

        // Progress Bar Logic
        const progressBar = document.getElementById("progress-bar-inner");
        let progress = 0;
        const progressInterval = setInterval(() => {
            if (progress < 100) {
                progress += 10;
                progressBar.style.width = `${progress}%`;
            } else {
                clearInterval(progressInterval);
            }
        }, 1000);

        // Hide the loader after page load
        window.addEventListener("load", () => {
            setTimeout(() => {
                loaderContainer.style.opacity = 0; // Fade out
                setTimeout(() => loaderContainer.remove(), 500); // Remove after fade-out
            }, 2000); // 2-second delay
        });

    } catch (error) {
        console.error("Error loading loader.html:", error);
    }
        // Loader Control
window.addEventListener("load", function () {
    document.getElementById("custom-loader").style.display = "none";
});
});

window.addEventListener("beforeunload", function () {
    document.getElementById("custom-loader").style.display = "flex";
});
