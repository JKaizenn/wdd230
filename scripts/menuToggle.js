document.getElementById('hamburger').addEventListener('click', function() {
    var nav = document.querySelector('.topnav');
    if (nav.className === 'topnav') {
        nav.className += ' responsive';
        this.innerHTML = 'X';
    } else {
        nav.className = 'topnav';
        this.innerHTML = '&#9776;';
    }
});