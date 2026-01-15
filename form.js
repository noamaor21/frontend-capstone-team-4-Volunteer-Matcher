var registrationForm = document.querySelector("form");
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = firstNameInput.value + " " + lastNameInput.value;
    
    
    localStorage.setItem("user_full_name", fullName);
    alert(fullName + ", נרשמת בהצלחה!");
    window.location.href = "personal_area.html";
    var ids = [
        "check-elderly", "check-food", "check-youth", 
        "check-lessons", "check-environment", "check-animals", 
        "check-tech", "check-office", "check-other"
    ];

    var names = [
        "עזרה לקשישים", "חלוקת מזון", "חונכות נוער", 
        "שיעורים פרטיים", "איכות הסביבה", "סיוע לבעלי חיים", 
        "תמיכה טכנולוגית", "סיוע משרדי", "אחר"
    ];

    var selectedInterests = "";

    for (var i = 0; i < ids.length; i++) {
        var checkbox = document.getElementById(ids[i]);
        if (checkbox.checked) {
            selectedInterests = selectedInterests + names[i] + ", ";
        }
    }
 if (selectedInterests.length > 0) {
    
    selectedInterests = selectedInterests.substring(0, selectedInterests.length - 2);
    selectedInterests = selectedInterests + ".";
}

    
    localStorage.setItem("user_interests", selectedInterests);

var userAddress = document.getElementById("address").value;
var userCity = document.getElementById("city").value;


localStorage.setItem("user_address", userAddress);
localStorage.setItem("user_city", userCity);

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