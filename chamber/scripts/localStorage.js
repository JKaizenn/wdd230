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
