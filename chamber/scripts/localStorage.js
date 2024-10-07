// Get the current date
const currentDate = Date.now();

// Retrieve the last visit date from localStorage
const lastVisitDate = localStorage.getItem("lastVisit");

// Sidebar content area for displaying the visit message
const sidebarContent = document.querySelector(".sidebar-content");

// Function to display visit message
function displayVisitMessage() {
    if (!lastVisitDate) {
        sidebarContent.textContent =
            "Welcome! Let us know if you have any questions.";
    } else {
        const timeDiff = currentDate - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

        if (daysDiff < 1) {
            sidebarContent.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            sidebarContent.textContent = "You last visited 1 day ago.";
        } else {
            sidebarContent.textContent = `You last visited ${daysDiff} days ago.`;
        }
    }

    // Update localStorage with the current date
    localStorage.setItem("lastVisit", currentDate);
}

// Call the function to display the message
displayVisitMessage();
function generateCalendar() {
    const calendarElement = document.getElementById("calendar");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Get the first and last days of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create an array of day names for the header row
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Generate the calendar header with the day names
    let calendarHTML = `<table><thead><tr>`;
    dayNames.forEach((day) => {
        calendarHTML += `<th>${day}</th>`;
    });
    calendarHTML += `</tr></thead><tbody><tr>`;

    // Fill in the blank days before the start of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += `<td></td>`;
    }

    // Fill in the days of the current month
    let day = 1;
    for (let i = firstDayOfMonth; day <= lastDateOfMonth; i++) {
        if (i % 7 === 0 && i > 0) {
            calendarHTML += `</tr><tr>`; // Start a new row every 7 days
        }
        calendarHTML += `<td>${day}</td>`;
        day++;
    }

    calendarHTML += `</tr></tbody></table>`;
    calendarElement.innerHTML = calendarHTML;
}

// Call the function to generate the calendar
generateCalendar();


// Select the lightbox and its content
const lightbox = document.getElementById('lightbox');
const expandedImg = document.getElementById('expandedImg');
const closeBtn = document.querySelector('.lightbox .close');

// Add click event listeners to each photo
document.querySelectorAll('.localPhoto').forEach(photo => {
    photo.addEventListener('click', function() {
        // Get the data-src attribute (the large version of the image)
        const largeImgSrc = this.getAttribute('data-src');

        // Debug log to ensure the correct path is being retrieved
        console.log("Large image source: ", largeImgSrc);

        // Set the src of the expanded image to the large version
        if (largeImgSrc) {
            expandedImg.src = largeImgSrc;
        } else {
            console.error("Image source not found!");
        }

        // Display the lightbox
        lightbox.style.display = 'flex';
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
