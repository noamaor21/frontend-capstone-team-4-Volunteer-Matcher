let hamburgerButton = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let menuIcon = document.querySelector('.menuIcon');
let closeIcon = document.querySelector('.closeIcon');

hamburgerButton.addEventListener('click', function() {

    menu.classList.toggle('showMenu');
    
    if (menu.classList.contains('showMenu')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
});

const menuLinks = document.querySelectorAll('.nav-list a');

menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('showMenu');
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    });
});







const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;

// בדיקה בטעינה: האם המשתמש כבר בחר במצב חשוך?
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeCheckbox.checked = true; // מסמן את הצ'קבוקס כפעיל
}

// האזנה לשינוי במצב הצ'קבוקס
darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});








