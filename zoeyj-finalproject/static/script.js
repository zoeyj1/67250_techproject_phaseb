var now = new Date();
var hour = now.getHours();
function greeting(x) {
    var greetingElement = document.getElementById("greeting");
    if (greetingElement == null) {
        return;
    }
    if (x < 5 || x >= 20) {
        greetingElement.innerHTML = "Good Night!";
    } else if (x < 12) {
        greetingElement.innerHTML = "Good Morning!";
    } else if (x < 18) {
        greetingElement.innerHTML = "Good Afternoon!";
    } else {
        greetingElement.innerHTML = "Good Evening!";
    }
}
greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = year;
}

function ActiveNav() {
    // Retrieve all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();


function toggleMenu() {
    const nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
    // apply or take off responsive class
}
// switch the mobile menu on/off


function loadLeafletMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement) return;

    if (typeof L === "undefined") {
        console.log("Leaflet did not load.")
        return;
    }

    if (mapElement._leaflet_id) return;

    const museumLat = 40.4443;
    const museumLng = -79.9436;

    const map = L.map("map").setView([museumLat, museumLng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([museumLat, museumLng])
        .addTo(map)
        .bindPopup("Museum Location")
        .openPopup();
}

document.addEventListener("DOMContentLoaded", function () {
    loadLeafletMap();
});


$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

$(".buyNow").click(function(){
    $("#checkoutForm").show();
});

$("#submitButton").click(function(){
    $("#submitMessage").show();
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (slides.length === 0) return;   
    if (n > slides.length) {
        slideIndex = 1 // rewind back
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block";
}

function calculatePrice() {
    var quantity = document.getElementById("quantity").value;
    var price = quantity * 18;
    price = price.toString();
    console.log(quantity, price);
    document.getElementById("price").innerHTML = `Price:\n$${price}`;
    localStorage.setItem('price', price);
    localStorage.setItem('quantity', quantity);
}

function init() {
    calculatePrice(); 
    document.getElementById("quantity").addEventListener("input", calculatePrice);
}

function confirmation() {
    const price = localStorage.getItem('price');
    const quantity = localStorage.getItem('quantity');
    document.getElementById("confirmationMessage").innerHTML = `You ordered ${quantity} tickets for a total of $${price}.`;
}