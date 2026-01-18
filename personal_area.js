
var fullName = localStorage.getItem("user_full_name");
var savedInterests = localStorage.getItem("user_interests");
var nameDisplay = document.getElementById("user-name");
var interestsDisplay = document.getElementById("user-interests");

nameDisplay.innerHTML = fullName;
interestsDisplay.innerHTML = "תחומי עניין: " + savedInterests;

var address = localStorage.getItem("user_address");
var city = localStorage.getItem("user_city");


var locationDisplay = document.getElementById("user-location");


if (address !== null && city !== null && address !== "" && city !== "") {
    
    locationDisplay.innerHTML = address + ", " + city;
} 
else if (city !== null && city !== "") {
    locationDisplay.innerHTML = city;
}
else if (address !== null && address !== "") {
    locationDisplay.innerHTML = address;
}
else {
    locationDisplay.innerHTML = ""; 
}

var logoutBtn = document.getElementById("log-out");

logoutBtn.addEventListener("click", function() {
    
    localStorage.clear();
    
    alert("התנתקת בהצלחה.");

    window.location.href = "form.html";
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
