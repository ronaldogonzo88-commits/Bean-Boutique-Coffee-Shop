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
// Adding to cart JS, for storage
var cart = localStorage.getItem("cart") || "";
var total = Number(localStorage.getItem("total")) || 0;

function addCart(name, price) {
    console.log("Button clicked", name, price);
    var textNotice = document.getElementById("textNotice");

    // Add item to cart
    cart += name + "," + price + "|";
    total += Number(price);

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    alert(name + " has been added to cart.");

    // for notification
    if (textNotice) {
        textNotice.style.display = "block";
        textNotice.innerHTML = name + " added to cart.";
        
        setTimeout(function () {
            textNotice.style.display = "none";
        }, 1500);
    }
    showCart();
}
function showCart() {
    var currentCart = localStorage.getItem("cart") || "";
    var items = currentCart.split("|");

    if (items.length > 0 && items[items.length - 1] === "") {
        items.pop();
    }
    var output = "";
    var currentTotal = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i].trim() === "") continue;

        var itemDetails = items[i].split(",");
        var itemName = itemDetails[0];
        var itemPrice = Number(itemDetails[1]);
        currentTotal += itemPrice;

        output += itemName + " - MKW " + itemPrice;
        output +=
        "<button onclick='removeCart(" + i + ")'>Remove</button><br>";
    }

    if (items.length === 0) {
        output = "Cart is empty";
    }
    cart = items.length > 0 ? items.join("|") + "|" : "";
    total = currentTotal;

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);

    var cartDiv = document.getElementById("cart");
    var totalSpan = document.getElementById("total");

    if (cartDiv) {
        cartDiv.innerHTML = output;
    }
    if (totalSpan) {
        totalSpan.innerHTML = "MKW " + currentTotal;
    }
}

function removeCart(index) {
    var currentCart = localStorage.getItem("cart") || "";
    var items = currentCart.split("|");

    if (items.length > 0 && items[items.length - 1] === "") {
        items.pop();
    }

    // Remove the selected item from the cart individually item by item
    items.splice(index, 1);
    cart = "";
    total = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i].trim() === "") continue;

        cart += items[i] + "|";
        var itemDetails = items[i].split(",");
        total += Number(itemDetails[1]);
    }

    localStorage.setItem("cart", cart);
    localStorage.setItem("total", total);
    showCart();
}

function checkoutOrder() {
    var currentTotal = Number(localStorage.getItem("total")) || 0;

    if (currentTotal === 0) {
        alert("Your shopping cart is empty.");
        return;
    }
    alert("System is processing payment for MKW " + currentTotal);
    alert("Payment Successful! Your order has been confirmed.");

    // Clear the cart after payment
    localStorage.removeItem("cart");
    localStorage.setItem("total", "0");

    cart = "";
    total = 0;
    showCart();
}
// Display cart when page loads
window.onload = function () {
    showCart();
};
