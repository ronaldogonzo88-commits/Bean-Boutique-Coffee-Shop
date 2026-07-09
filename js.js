//This is the pop up fuction which makes pop up once page has loaded
window.onload = function(){
    document.getElementById("Popup-box").style.display = "block";
}
//This one closes the pop up
function closePopup(){
    document.getElementById("Popup-box").style.display = "none";
}
//This function is for sign up on the pop up message
function SignUp(){
    alert("Thank you for signing up: ");
    closePopup();
}
//this one is slideshow function
let slides = document.querySelectorAll(".slide-show img");
let i = 0;
setInterval(() => {
    slides[i].style.display = "none";
    i = (i + 1) % slides.length;
    slides[i].style.display = "block";
},3000);
//this one is for coffee selection used for search bar 
function findCoffee() {
    let search = document.getElementById("search").value.toLowerCase();
    let coffee = document.getElementsByClassName("coffee1");

    for (let i = 0; i < coffee.length; i++) {
        if (coffee[i].textContent.toLowerCase().includes(search)) {
            coffee[i].style.display = "block";
        } else {
            coffee[i].style.display = "none";
        }
    }
}
//cart js
var cart = localStorage.getItem("cart") || "";
var total = Number(localStorage.getItem("total")) || 0;


function addCart(name, price){
    cart += name + "," + price + "|";
    total += price;

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    showCart();
}
function showCart(){
    var items = cart.split("|");
    var output = "";

    for(var i = 0; i < items.length - 1; i++){
        var item = items[i].split(",");
        output += item[0] + " - MKW " + item[1];
        output += " <button onclick='removeCart(" + i + ")'>Remove</button><br>";
    }

    if(output == ""){
        output = "Cart is empty";
        total = 0;
        localStorage.setItem("total", 0);
    }
    document.getElementById("cart").innerHTML = output;
    document.getElementById("total").innerHTML = "MKW " + total;
}
function removeCart(index){
    var items = cart.split("|");
    var price = items[index].split(",")[1];

    total -= Number(price);
    items.splice(index, 1);
    cart = items.join("|");

    if(cart == ""){
        total = 0;
    }
    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    showCart();
}
showCart();