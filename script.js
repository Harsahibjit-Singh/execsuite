function toggleChatbot() {
var chatWindow = document.getElementById("chatWindow");
chatWindow.style.display = chatWindow.style.display === "none" || !chatWindow.style.display ? "block" : "none";
}

function sendMessage() {
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

if (userInput.value.trim() === "") return;

// Display user message
const userMessage = document.createElement("div");
userMessage.className = "chat-message user";
userMessage.innerText = userInput.value;
chatBody.appendChild(userMessage);

// Clear input
userInput.value = "";

// Simulate bot response
const botMessage = document.createElement("div");
botMessage.className = "chat-message bot";
botMessage.innerText = "I'm here to help! Please wait...";
chatBody.appendChild(botMessage);

// Scroll to bottom of chat
chatBody.scrollTop = chatBody.scrollHeight;

//  // Check if data is stored in localStorage and valid for 24 hours
//  const lastInteraction = localStorage.getItem("lastInteractionTime");
//  const currentTime = new Date().getTime();

//  if (!lastInteraction || currentTime - lastInteraction > 24 * 60 * 60 * 1000) {
//    // Save current interaction timestamp in localStorage
//    localStorage.setItem("lastInteractionTime", currentTime);


// Define the chatbot responses based on user input
setTimeout(() => {
    let botResponse = "I'm still learning, but here's how I can assist you:";
    const userQuestion = userMessage.innerText.toLowerCase();

    if (userQuestion.includes("home")) {
      botResponse = "You can go back to the homepage by clicking here: <a href='index.html'>Home</a>";
    } else if (userQuestion.includes("hall of fame")) {
      botResponse = "Check out the Hall of Fame section here: <a href='hallofame.html'>Hall of Fame</a>";
    } else if (userQuestion.includes("socials")) {
      botResponse = "For our socials, click here: <a href='socials.html'>Socials</a>";
    } else if (userQuestion.includes("event")) {
      botResponse = "You can register for events here: <a href='eventregistration.html'>Event Registration</a>";
    } else if (userQuestion.includes("attendance list")) {
      botResponse = "View the attendance list here: <a href='attendancelist.html'>Attendance List</a>";
    } else if (userQuestion.includes("generate report")) {
      botResponse = "Generate your report here: <a href='generatereport.html'>Generate Report</a>";
    } else if (userQuestion.includes("achievements")) {
      botResponse = "Check out the achievements page here: <a href='achievements.html'>Achievements</a>";
    } else if (userQuestion.includes("certificates")) {
      botResponse = "View your certificates here: <a href='certificates.html'>Certificates</a>";
    }else if (userQuestion.includes("lanyard")) {
        botResponse = "Request a new lanyard here: <a href='lanyard.html'>Request Lanyard</a>";
    } else if (userQuestion.includes("lor")||userQuestion.includes("letter of recommendation")) {
        botResponse = "Request a Letter of Recommendation (LOR) here: <a href='lor.html'>Request LOR</a>";
    } else if ((userQuestion.includes("prediction"))) {
           botResponse = "The AI Prediction section is coming soon. Stay tuned!";
    //     botResponse = "Check out AI Prediction (coming soon): <a href='aiprediction.html'>AI Prediction</a>";
    } else if ((userQuestion.includes("analysis"))) {
              botResponse = "The AI Analysis section is coming soon. Stay tuned!";
    //     botResponse = "Explore AI Analysis (coming soon): <a href='aianalysis.html'>AI Analysis</a>";
    }else if ((userQuestion.includes("ai"))) {
        botResponse = "The AI section is coming soon. Stay tuned!";
    }else if (userQuestion.includes("gp")) {
        botResponse = "The GP Credit of Co-Curricular is currently unavailable. Please check back later.";
    }else if (userQuestion.includes("format")) {
        botResponse = "The formats section is coming soon. Stay tuned!";
    }else if (userQuestion.includes("bulk mail")) {
        botResponse = "You can view or send bulk emails here: <a href='bulkmail.html'>BULK MAIL</a>";
    }else if (userQuestion.includes("letter")) {
        botResponse = "You can view or request letters here: <a href='letters.html'>LETTERS</a>";
    }else if (userQuestion.includes("about")) {
        botResponse = "Learn more about us here: <a href='about.html'>About</a>";
    } else if (/who.*built.*website|who.*created.*website|who.*developed.*website|who.*made.*website/i.test(userQuestion)) {
        botResponse = "This website was built by Harsahibjit Singh. Feel free to reach out if you'd like to know more about the development process!";
    }else if (userQuestion.includes("branch") && userQuestion.includes("counsellor")&& userQuestion.includes("who")) {
        botResponse = "The Branch Counsellor is Sugandha Sharma. Feel free to ask if you need more details!";
    }else if (userQuestion.includes("hello") || userQuestion.includes("hi") || userQuestion.includes("hey") || userQuestion.includes("greetings")) {
        botResponse = "Hello! How can I assist you today? 😊";
    }else if (userQuestion.includes("thank you") || userQuestion.includes("thanks") || userQuestion.includes("grateful")) {
        botResponse = "You're welcome! 😊";
    }else if (userQuestion.includes("bye") || userQuestion.includes("goodbye") || userQuestion.includes("exit") || userQuestion.includes("quit")) {
        botResponse = "Goodbye! Have a great day! 😊";
        setTimeout(() => {
          document.getElementById("chatWindow").style.display = "none";
        }, 2000); // Close after 2 seconds
    } 
    
    
    
    
    
    // Questions from Hall of Fame page


    else if (userQuestion.includes("hall of fame") || userQuestion.includes("what is hall of fame")) {
        botResponse = "The Hall of Fame celebrates individuals who have made impactful contributions in their field, honoring their vision, legacy, and innovation. You can learn more on the Hall of Fame page: <a href='hallofame.html'>Hall of Fame</a>";
    } 
    else if (userQuestion.includes("vision") && userQuestion.includes("hall of fame")) {
        botResponse = "The vision of the Hall of Fame is to empower students to lead with forward-thinking ideas and shape a better tomorrow. For more details, visit the Hall of Fame page: <a href='hallofame.html'>Hall of Fame</a>";
    } 
    else if (userQuestion.includes("legacy") &&  userQuestion.includes("hall of fame")) {
        botResponse = "The Hall of Fame inspires generations through a tradition of excellence and impactful contributions to technology. Find out more here: <a href='hallofame.html'>Hall of Fame</a>";
    }
    else if (userQuestion.includes("innovation") &&  userQuestion.includes("hall of fame")) {
        botResponse = "Innovation in the Hall of Fame refers to fostering creativity, embracing change, and driving advancements in engineering and technology. Learn more on the Hall of Fame page: <a href='hallofame.html'>Hall of Fame</a>";
    }
    else if (userQuestion.includes("spotlight stories")) {
        botResponse = "Spotlight stories in the Hall of Fame are a tribute to those who have shaped and defined the organization’s mission and values. Read more on the Hall of Fame page: <a href='hallofame.html'>Hall of Fame</a>";
    } 
    else if (userQuestion.includes("gallery") || userQuestion.includes("see gallery")) {
        botResponse = "Here is the Hall of Fame image gallery showcasing featured members. You can view the images of our celebrated individuals here: <a href='hallofame.html'>Hall of Fame</a>";
    } 
    else if (userQuestion.includes("birthday wishes") || userQuestion.includes("birthday")) {
        botResponse = "The Hall of Fame celebrates birthdays of its members with special wishes. You can see birthday wishes displayed on our Hall of Fame page: <a href='hallofame.html'>Hall of Fame</a>";
    }

    
    // Questions from Socials page

    else if (userQuestion.includes("socials") || userQuestion.includes("what is socials")) {
        botResponse = "The Socials page contains announcements, newsletters, and updates from various IEEE organizations. You can explore more about the IEEE India Council, Delhi Section Newsletters, and IEEE Access Announcements here: <a href='socials.html'>Socials</a>";
    }
    else if (userQuestion.includes("india council") || userQuestion.includes("ieee india council")) {
        botResponse = "The IEEE India Council Announcements section provides updates and information about the IEEE India Council. You can visit the page for more details: <a href='socials.html'>India Council Announcements</a>";
    }
    else if (userQuestion.includes("delhi section") || userQuestion.includes("ieee delhi section") || userQuestion.includes("newsletter")) {
        botResponse = "The IEEE Delhi Section Newsletters section features newsletters and news related to the IEEE Delhi Section. You can check it out here: <a href='socials.html'>Delhi Section Newsletters</a>";
    }
    else if (userQuestion.includes("ieee access") || userQuestion.includes("ieee access announcements")) {
        botResponse = "The IEEE ACCESS Announcements section offers updates about IEEE Access. Visit this page for more information: <a href='socials.html'>IEEE Access Announcements</a>";
    }
    else if (userQuestion.includes("newsletter") || userQuestion.includes("newsletters")) {
        botResponse = "The Socials page contains newsletters and updates from various IEEE organizations. You can explore more about the IEEE India Council, Delhi Section Newsletters, and IEEE Access Announcements here: <a href='socials.html'>Socials</a>";
    }
    else if (userQuestion.includes("updates")) {
        botResponse = "The Socials page contains announcements, newsletters, and updates from various IEEE organizations. You can explore more about the IEEE India Council, Delhi Section Newsletters, and IEEE Access Announcements here: <a href='socials.html'>Socials</a>";
    }
    
    // Questions from Event Registration page
    
        else if (userQuestion.includes("event registration") || userQuestion.includes("register for event")) {
            botResponse = "The Event Registration page allows you to register for upcoming events and workshops. You can view the list of events and register here: <a href='eventregistration.html'>Event Registration</a>";
        }
        else if (userQuestion.includes("workshops")) {
            botResponse = "The Event Registration page allows you to register for upcoming workshops and events. You can view the list of workshops and register here: <a href='eventregistration.html'>Event Registration</a>";
        }
        else if (userQuestion.includes("events")) {
            botResponse = "The Event Registration page allows you to register for upcoming events and workshops. You can view the list of events and register here: <a href='eventregistration.html'>Event Registration</a>";
        }

        // Questions from Attendance List page
            
            else if (userQuestion.includes("attendance list") || userQuestion.includes("view attendance list") || userQuestion.includes("attendance")) {
                botResponse = "The Attendance List page displays attendance records for various events and workshops. You can view the attendance list here: <a href='attendancelist.html'>Attendance List</a>";
            }

    // Questions from Generate Report page
    
        else if (userQuestion.includes("generate report") || userQuestion.includes("report")) {
            botResponse = "The Generate Report page allows you to generate reports for various events and workshops. You can view the reports here: <a href='generatereport.html'>Generate Report</a>";
        }

    // Questions from Achievements page
    else if (userQuestion.includes("achievements") || userQuestion.includes("milestones")) {
        botResponse = "The Achievements & Milestones page celebrates our major accomplishments and impact over the years. You can explore events, awards, and statistics that highlight our journey here: <a href='achievements.html'>Achievements & Milestones</a>";
    }else if (userQuestion.includes("awards") || userQuestion.includes("recognitions")) {
        botResponse = "We are proud of our awards and recognitions, including the IEEE Regional Exemplary Student Branch Award 2022 and the IEEE Women in Engineering SB Affinity Group Award 2022. Check out all our awards here: <a href='achievements.html'>Awards & Recognitions</a> <br><br> Moreover, IEEE offers various awards and recognitions for contributions to technology, research, and innovation. Would you like to know about any specific IEEE award?\n You can also visit the IEEE Awards page for more information: <a href='https://www.ieee.org/about/awards/index.html'target='_blank'>IEEE Awards</a>";
    }
    
    // Questions from Certificates page



    else if (userQuestion.includes("participation") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Participation is awarded for attending workshops or similar events. Explore designs for this certificate on our <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("achievement") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Achievement is given for outstanding performance or success. You can explore the design options here: <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("leadership") && userQuestion.includes("certificate")) {
        botResponse = "The Leadership Certificate recognizes strong leadership and organizational skills. Choose the design that suits your needs on our <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("recognition") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Recognition honors significant contributions or achievements. Visit the <a href='certificates.html'>Certificates Page</a> to explore designs.";
    }
    else if ((userQuestion.includes("guest") && userQuestion.includes("certificate")) || (userQuestion.includes("certificate") && userQuestion.includes("speaker"))) {
        botResponse = "The Guest Speaker Certificate acknowledges contributions as a guest speaker at an event. Browse different designs on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("honour") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Honour celebrates exceptional dedication or remarkable contributions. Visit the <a href='certificates.html'>Certificates Page</a> for design options.";
    }
    else if (userQuestion.includes("appreciation") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Appreciation expresses gratitude for support or assistance provided. Explore design options on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("volunteer") && userQuestion.includes("certificate")) {
        botResponse = "The Volunteer Certificate recognizes time and effort dedicated to volunteering. You can choose from multiple designs on our <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("attendance") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Attendance confirms participation in seminars, workshops, or events. Visit the <a href='certificates.html'>Certificates Page</a> for design options.";
    }
    else if (userQuestion.includes("volunteer") && userQuestion.includes("certificate") && userQuestion.includes("month")) {
        botResponse = "The Volunteer of the Month Certificate highlights outstanding volunteer contributions during the specified period. Browse design options on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("teamwork") && userQuestion.includes("certificate")) {
        botResponse = "The Teamwork Certificate rewards exceptional collaboration and team spirit. Visit the <a href='certificates.html'>Certificates Page</a> to view available designs.";
    }
    else if (userQuestion.includes("sponsorship") && userQuestion.includes("certificate")) {
        botResponse = "The Certificate of Sponsorship appreciates sponsors for their valuable support. Find design options on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("retirement") && userQuestion.includes("certificate")) {
        botResponse = "The Retirement Certificate celebrates an individual's career and service upon retirement. Explore design options here: <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("customize") && userQuestion.includes("certificate")) {
        botResponse = "To customize a certificate, choose a certificate design from the <a href='certificates.html'>Certificates Page</a>, then fill in the necessary details to personalize it.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("design")) {
        botResponse = "We offer various certificate design options. Visit the <a href='certificates.html'>Certificates Page</a> to explore them.";
    }
    else if (userQuestion.includes("types")||userQuestion.includes("kinds")||userQuestion.includes("categories") && userQuestion.includes("certificate")) {
        botResponse = "Available certificate Types include Certificate of Participation, Achievement, Leadership, and more. View and customize designs on our <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("templates")) {
        botResponse = "We provide a range of certificate templates for different occasions. Explore our collection on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("samples")) {
        botResponse = "You can view sample certificates on our <a href='certificates.html'>Certificates Page</a> to get an idea of the available designs.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("examples")) {
        botResponse = "To see examples of certificates, visit the <a href='certificates.html'>Certificates Page</a> and explore the available designs.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("formats")) {
        botResponse = "We offer various certificate formats. Visit the <a href='certificates.html'>Certificates Page</a> to view and customize the available formats.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("designs")) {
        botResponse = "We provide a range of certificate designs for different occasions. Explore our collection on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("styles")) {
        botResponse = "We offer various certificate styles. Visit the <a href='certificates.html'>Certificates Page</a> to view and customize the available styles.";
    }
    else if (userQuestion.includes("certificate") && userQuestion.includes("themes")) {
        botResponse = "We provide a range of certificate themes for different occasions. Explore our collection on the <a href='certificates.html'>Certificates Page</a>.";
    }
    else if (userQuestion.includes("certificate") || userQuestion.includes("certification") ) {
        botResponse = "The Certificates page showcases various certificates like Certificate of Participation, Achievement, Leadership, and more. You can explore and design certificates here: <a href='certificates.html'>Certificates</a>";
    }

    // Questions for IEEE

    
    // Questions for IEEE

    else if (userQuestion.includes("ieee")) {
        botResponse = "IEEE stands for the Institute of Electrical and Electronics Engineers. It's a global organization dedicated to advancing technology for humanity. Would you like to know more about IEEE's initiatives or events? <br> You can also visit the official IEEE website for more information: <a href='https://www.ieee.org/'>IEEE Website</a>";
    } 
    else if (userQuestion.includes("membership")) {
        botResponse = "IEEE membership offers access to resources, conferences, journals, and a network of professionals. You can learn more about IEEE membership benefits and join as a member. <a href='https://www.ieee.org/membership/index.html'>Join IEEE</a>";
    } 
    else if (userQuestion.includes("chapters")) {
        botResponse = "IEEE has various chapters based on regions and technical fields. Would you like to know about the IEEE CUSB (Chandigarh University Student Branch)?<br> We have 10 chapters right now in our branch right now";
    } 
    else if (userQuestion.includes("projects")) {
        botResponse = "IEEE encourages students and professionals to work on projects that align with emerging technologies. Are you looking for IEEE project ideas or ongoing projects?<br> You can mail at ieeecusb.queries@gmail.com for more information";
    } 
    else if (userQuestion.includes("publications")) {
        botResponse = "IEEE publishes several journals, conferences, and standards on topics like electrical engineering, computer science, and more. Would you like more information on a specific IEEE publication?<br>You can also visit the IEEE Xplore Digital Library for access to IEEE publications: <a href='https://ieeexplore.ieee.org/'>IEEE Xplore</a>";
    } 
    else if (userQuestion.includes("benefits")) {
        botResponse = "IEEE members enjoy benefits like access to exclusive resources, discounts on conferences, and networking opportunities. Would you like to know more about the benefits of IEEE membership? <br> You can also visit the IEEE Membership Benefits page for more information: <a href='https://www.ieee.org/membership/benefits/index.html'>IEEE Membership Benefits</a>";
    } 
    else if (userQuestion.includes("student branch"||"cusb"||"chandigarh university student branch"||"ieee cusb")) {
        botResponse = "The IEEE Student Branch at CUSB is an active community for students interested in electrical and electronics engineering. Would you like to know about the activities and events hosted by IEEE CUSB?<br> You can also visit the IEEE CUSB website for more information: <a href='https://edu.ieee.org/'>IEEE CUSB</a>";
    } 
    else if (userQuestion.includes("ieee tutorials")) {
        botResponse = "IEEE provides tutorials and educational resources on various engineering and technology topics. Are you looking for specific tutorials or subjects?";
    }





    else {
      botResponse = "Thank you for reaching out! I'm currently in a restricted mode due to security features, and my data access is limited. However, I'm constantly improving and will soon be able to provide you with more comprehensive assistance.";
    }

    // Update bot's message
    botMessage.innerHTML = botResponse;

    // Scroll to bottom of chat
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000); // Simulate bot response delay

//  }

// Here you can add logic to send userMessage to a real backend or API
// setTimeout(() => {
// botMessage.innerText = "Thank you for your message! Currently, I'm a child bot with minimum data. So, will not be able to answer your queries. But, I'm learning and will be able to help you soon!";
// }, 1000); // Simulate bot response delay
}
