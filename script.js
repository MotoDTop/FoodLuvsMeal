// An array of objects that contain dinner options and their ingredients
const dinners = [
    {
        name: "Nothing Selected",
        ingredients: "You're hungry"
    },
    {
      name: "Chicken Alfredo",
      ingredients: "Chicken, Alfredo Sauce, Pasta"
    },
    {
      name: "Chicken Fried Rice",
      ingredients: "Chicken, Rice, Vegetables"
    },
    {
      name: "Hamburger",
      ingredients: "Beef, Bun, Lettuce, Tomato"
    },
    {
      name: "Fish Tacos",
      ingredients: "Fish, Tortilla, Lettuce, Tomato"
    },
    {
      name: "Steak and Potatoes",
      ingredients: "Steak, Potatoes, Vegetables"
    }
  ];
  
  // Function to populate select elements with dinner options
  function populateSelectElements() {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    days.forEach(day => {
      const selectElement = document.getElementById(day);
      dinners.forEach(dinner => {
        const option = document.createElement("option");
        option.value = dinner.name;
        option.textContent = dinner.name;
        selectElement.appendChild(option);
      });
    });
  }
  
  // Call the function to populate the select elements
  populateSelectElements();
  
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
  
  // Save selections to local storage
  function saveSelections() {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const selections = {};
    days.forEach(day => {
      const selectElement = document.getElementById(day);
      selections[day] = selectElement.value;
    });
    localStorage.setItem('dinnerSelections', JSON.stringify(selections));
    alert('Your selections have been saved!');
  }
  
  // Add event listener to the save button
  document.getElementById('saveButton').addEventListener('click', saveSelections);
  
  // Function to load selections from local storage
  function loadSelections() {
    const selections = JSON.parse(localStorage.getItem('dinnerSelections'));
    if (selections) {
      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      days.forEach(day => {
        const selectElement = document.getElementById(day);
        selectElement.value = selections[day];
      });
    }
  }
  
  // Call the function to load the selections when the page loads
  window.onload = loadSelections;





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