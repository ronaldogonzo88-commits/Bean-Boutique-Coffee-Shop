// This is the pop up function which makes pop up once page has loaded
window.onload = function(){
    let popup = document.getElementById("Popup-box");
    if(popup){
        popup.style.display = "block";
    }
}
// This one closes the pop up 
function closePopup(){
    let popup = document.getElementById("Popup-box");
    if(popup){
        popup.style.display = "none";
    }
}
// This function is for sign up on the pop up message
function SignUp(){
    alert("Thank you for signing up: ");
    closePopup();
}
// This one is for coffee selection used for search bar 
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
//Adding to cart js, For storage
var cart = localStorage.getItem("cart") || "";
var total = Number(localStorage.getItem("total")) || 0;

function addCart(name, price){
    console.log("Button clicked", name, price);
    
    // Add the name of item and price
    cart += name + "," + price + "|";
    total += price;

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    alert(name + "has been aaded to cart");
    
    setTimeout(function(){
        textNotice.style.display = "none";
    },1500);
    
    showCart();
}

function showCart(){
    var currentCart = localStorage.getItem("cart") || ""; 
    var items = currentCart.split("|");
    var output = "";

    if(items[items.length - 1] === "") {
        items.pop();
    }

    for(var i = 0; i < items.length; i++){
        var item = items[i].split(",");
        output += item[0] + " - MKW " + item[1];
        output += " <button onclick='removeCart(" + i + ")'>Remove</button><br>";
    }

    if(output == "" || items.length === 0){
        output = "Cart is empty";
        total = 0;
        localStorage.setItem("total", 0);
    }
    
    if(document.getElementById("cart"))
        document.getElementById("cart").innerHTML = output;
    if(document.getElementById("total"))
        document.getElementById("total").innerHTML = "MKW " + total;
}

function removeCart(index){
    var currentCart = localStorage.getItem("cart") || "";
    var items = currentCart.split("|");
    
    if(items[items.length - 1] === "") {
        items.pop();
    }

    var price = items[index].split(",")[1];
    total -= Number(price);
    
    items.splice(index, 1);
    
    if(items.length > 0) {
        cart = items.join("|") + "|";
    } else {
        cart = "";
        total = 0;
    }

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    
    showCart();
}
showCart();
function checkoutOrder(){
    const totalAmount = document.getElementById('total').innerText;

    if (totalAmount === "0" || totalAmount ===""){
        alert("Your shopping cart is empty");
        return;
    }
    alert("System is processing payment for MKW" + totalAmount);
    alert("Payment Successful! Your subscription order has been confirmed.");

    localStorage.removeItem("cart");
    localStorage.setItem("total", "0");
    showCart();
}
