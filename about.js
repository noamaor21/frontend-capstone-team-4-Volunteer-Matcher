/* === תפריט המבורגר (מובייל) === */
let hamburgerButton = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let menuIcon = document.querySelector('.menuIcon');
let closeIcon = document.querySelector('.closeIcon');

if (hamburgerButton && menu && menuIcon && closeIcon) {
    hamburgerButton.addEventListener('click', function () {
        menu.classList.toggle('showMenu');
        if (menu.classList.contains('showMenu')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'inline';
        } else {
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        }
    });

    // סגירת תפריט בלחיצה על לינק
    let menuLinks = document.querySelectorAll('.nav-list a');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('showMenu');
            menuIcon.style.display = 'inline';
            closeIcon.style.display = 'none';
        });
    });
}

/* === Dark Mode (עם החלפת אייקון וזיכרון) === */
let darkModeToggle = document.getElementById('dark-mode-toggle');
let iconMoon = document.getElementById('icon-moon');
let iconSun = document.getElementById('icon-sun');

function updateThemeIcon() {
    if (!iconMoon || !iconSun) return;
    if (document.body.classList.contains('dark-mode')) {
        iconMoon.style.display = 'none';
        iconSun.style.display = 'block';
    } else {
        iconMoon.style.display = 'block';
        iconSun.style.display = 'none';
    }
}

// טעינה מהזיכרון של הדפדפן
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
updateThemeIcon();

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateThemeIcon();
    });
}

var personalLink = document.getElementById("personal-link");

personalLink.addEventListener("click", function (event) {

    if (localStorage.getItem("user_state") === null) {
        event.preventDefault();
        alert("עליך להירשם קודם כדי להיכנס לאזור האישי!");
        window.location.href = "form.html";
    }
});

// בחירת כפתור הוואטסאפ - הכחול (Secondary)
const whatsappButtons = document.querySelectorAll('.secondary-button');

// בחירת כפתור השיחה - הכתום (Primary)
const phoneButtons = document.querySelectorAll('.primary-button');

// הגדרת פעולה לכפתורי וואטסאפ (הכחולים) - שליחה ישירה
whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.open('https://wa.me/972533340373', '_blank');
    });
});

// הגדרת פעולה לכפתורי שיחה (הכתומים) - קפיצת התראה
phoneButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("לשיחה טלפונית עם נציג ניתן לחייג למספר - 0533340373");
    });
});