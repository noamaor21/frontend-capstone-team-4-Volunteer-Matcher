
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
