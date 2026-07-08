window.onload = function(){
    document.getElementById("Popup-box").style.display = "block";
}
function closePopup(){
    document.getElementById("Popup-box").style.display = "none";
}
function SignUp(){
    alert("Thank you for signing up: ");
    closePopup();
}

let slides = document.querySelectorAll(".slide-show img");
let i = 0;
setInterval(() => {
    slides[i].style.display = "none";
    i = (i + 1) % slides.length;
    slides[i].style.display = "block";
},3000);