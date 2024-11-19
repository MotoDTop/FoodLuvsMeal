
var modal = document.getElementById("myModal");

var btn = document.getElementById("modalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("modalForm").onsubmit = function(event) {
    event.preventDefault();


    modal.style.display = "none";
}

// document.getElementById("mealModal").onsubmit = function(event) {
//   event.preventDefault();
//   const selectedOption = document.querySelector('input[name="Vegetarian"]:checked');
//   if (selectedOption) {

//   } else {
//     alert("Please select an option.");
//   }
// }




// var modal = document.getElementById("myModal");
// var btn = document.getElementById("openModal");
// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// document.getElementById("").onsubmit = function(event) {
//   event.preventDefault();
//   const selectedOption = document.querySelector('input[name="Vegetarian"]:checked');
//   if (selectedOption) {
//     alert("You selected: " + selectedOption.value);
//     modal.style.display = "none";
//   } else {
//     alert("Please select an option.");
//   }
// }


// var modal = document.getElementById("diSelect [Nothing Selected, Steak, Fish, Hamburger, Chicken, Alfredo, Pizz}]");

// var dropdown = document.getElementsByClassName("select")[0];

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// document.getElementById("diSelect").onsubmit = function(event) {
//   event.preventDefault(); // Prevent the default form submission
//   const selectedOption = document.querySelector('input[name="options"]:active');
//   if (selectedOption) {
//     alert("You selected: " + selectedOption.value);
//     modal.style.display = "none"; // Close the modal after submission
//   } else {
//     alert("Please select an option.");
//   }
// }