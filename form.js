var registrationForm = document.querySelector("form");
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // מונע מהדף להתרענן

    // --- שלב א': איסוף נתונים למערך (Array) ---
    // כאן אנחנו בודקים איזה צ'קבוקסים המשתמש סימן
    var selectedInterests = [];
    var ids = ["check-elderly", "check-food", "check-youth", "check-lessons", "check-environment", "check-animals", "check-tech", "check-office", "check-other"];
    var names = ["עזרה לקשישים", "חלוקת מזון", "חונכות נוער", "שיעורים פרטיים", "איכות הסביבה", "סיוע לבעלי חיים", "תמיכה טכנולוגית", "סיוע משרדי", "אחר"];

    for (var i = 0; i < ids.length; i++) {
        var checkbox = document.getElementById(ids[i]);
        if (checkbox && checkbox.checked) {
            selectedInterests.push(names[i]); // מוסיף את השם למערך
        }
    }

    // --- שלב ב': יצירת אובייקט ה-State (Object) ---
    // אנחנו אורזים את כל פרטי המשתמש לחבילה אחת מסודרת
    var userState = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        fullName: firstNameInput.value + " " + lastNameInput.value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        interests: selectedInterests // כאן נכנס המערך שיצרנו קודם
    };

    // --- שלב ג': שמירה בזיכרון (LocalStorage) ---
    // LocalStorage יודע לשמור רק מילים, אז נהפוך את האובייקט לטקסט בעזרת JSON.stringify
    localStorage.setItem("user_state", JSON.stringify(userState));

    // הודעת הצלחה ומעבר דף
    alert(userState.fullName + ", נרשמת בהצלחה!");
    window.location.href = "personal_area.html";
});

var personalLink = document.getElementById("personal-link");

personalLink.addEventListener("click", function(event) {
    
    if (localStorage.getItem("user_full_name") === null) {
        event.preventDefault(); 
        alert("עליך להירשם קודם כדי להיכנס לאזור האישי!");
        window.location.href = "form.html"; 
    }
});

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
