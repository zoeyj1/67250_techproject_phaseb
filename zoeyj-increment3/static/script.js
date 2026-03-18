// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);
// var A = "Hello ";
// var B = "World!";
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     var sum = x1 + x2;
//     console.log(sum);
// }

// if (C.length > z) {
//     console.log(C);
// } if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(fruitArray) {
//     for (var i = 0; i < fruitArray.length; i++) {
//         if (fruitArray[i] === "Banana") {
//             alert("Found Banana!");
//         }
//     }
// }

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