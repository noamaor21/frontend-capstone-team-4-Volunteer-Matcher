var buttons = document.querySelectorAll(".volunteer-btn");


var organization = document.getElementById("org-name").innerText;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function()
    {
        
        var userName = localStorage.getItem("user_full_name");

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