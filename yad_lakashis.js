var buttons = document.querySelectorAll(".volunteer-btn");


var organization = document.getElementById("org-name").innerText;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var userName = localStorage.getItem("user_state");

        if (userName === null) {
            alert("עליך להירשם באתר לפני שתוכל להירשם להתנדבות!");
            window.location.href = "form.html";
        }
        else {
            localStorage.setItem("chosen_org", organization);

            alert(userName + ", נרשמת בהצלחה ל" + organization);
            window.location.href = "personal_area.html";
        }
    }
    );
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


var personalLink = document.getElementById("personal-link");

personalLink.addEventListener("click", function(event) {
    
    if (localStorage.getItem("user_state") === null) {
        event.preventDefault(); 
        alert("עליך להירשם קודם כדי להיכנס לאזור האישי!");
        window.location.href = "form.html"; 
    }
});


function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const menuIcon = document.querySelector('.menuIcon');
    const closeIcon = document.querySelector('.closeIcon');

   
    navList.classList.toggle('showMenu');

    
    if (navList.classList.contains('showMenu')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'inline';
    } else {
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
    }
}
