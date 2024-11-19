// document.getElementById('print').addEventListener('click', function() {
//   window.print();
// });

var modal = document.getElementById("myModal");

// Get open modal button
var btn = document.getElementById("modalBtn");

// Get close button
var span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("modalForm").onsubmit = function(event) {
    event.preventDefault();
    // Process form data here
    alert("Form submitted!");
    modal.style.display = "none"; // Close modal after submission
}





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