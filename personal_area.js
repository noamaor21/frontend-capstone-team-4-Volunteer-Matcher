var rawData = localStorage.getItem("user_state"); 
var user = JSON.parse(rawData); 

if (user) {
    
    var nameDisplay = document.getElementById("user-name");
    nameDisplay.innerHTML = user.fullName;

    var interestsDisplay = document.getElementById("user-interests");
    interestsDisplay.innerHTML = "תחומי עניין: " + user.interests.join(", ");

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

  let menuLinks = document.querySelectorAll('.nav-list a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('showMenu');
      menuIcon.style.display = 'inline';
      closeIcon.style.display = 'none';
    });
  });
}


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
