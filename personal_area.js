// --- שלב א': שליפת האובייקט מהזיכרון ---
var rawData = localStorage.getItem("user_state"); // מקבלים את הטקסט
var user = JSON.parse(rawData); // הופכים את הטקסט חזרה לאובייקט JS חי

// בדיקה אם המשתמש קיים בזיכרון
if (user) {
    // --- שלב ב': עדכון ה-HTML בעזרת האובייקט ---
    
    // הצגת השם המלא
    var nameDisplay = document.getElementById("user-name");
    nameDisplay.innerHTML = user.fullName;

    // הצגת תחומי עניין (חיבור המערך למחרוזת אחת עם פסיקים)
    var interestsDisplay = document.getElementById("user-interests");
    interestsDisplay.innerHTML = "תחומי עניין: " + user.interests.join(", ");

    // הצגת מיקום (בדיקה אם יש עיר וכתובת)
    var locationDisplay = document.getElementById("user-location");
    if (user.address && user.city) {
        locationDisplay.innerHTML = user.address + ", " + user.city;
    } else if (user.city) {
        locationDisplay.innerHTML = user.city;
    } else if (user.address) {
        locationDisplay.innerHTML = user.address;
    } else {
        locationDisplay.innerHTML = "מיקום לא הוזן";
    }
}
var logoutBtn = document.getElementById("log-out");

logoutBtn.addEventListener("click", function() {
    
    localStorage.clear();
    
    alert("התנתקת בהצלחה.");

    window.location.href = "form.html";
});
var savedOrg = localStorage.getItem("chosen_org");

if (savedOrg !== null) {
    var tableBody = document.querySelector(".status-table tbody");

    tableBody.innerHTML = tableBody.innerHTML + 
        "<tr>" +
            "<td>" + savedOrg + "</td>" +
            "<td><span class='status-tag waiting'>בהמתנה</span></td>" +
        "</tr>";
}



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

/* =========================
   Dark Mode (עם החלפת אייקון)
========================= */
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

// טעינה ראשונית
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
