// banner.js
function showBanner() {
    const banner = document.getElementById('meetGreetBanner');
    const day = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Show banner only on Monday, Tuesday, and Wednesday
    if (day >= 1 && day <= 3) {
        banner.style.display = 'block';
    }

    // Close banner when the close button is clicked
    document.getElementById('closeBanner').addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

showBanner();
