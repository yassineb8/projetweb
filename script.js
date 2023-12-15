function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function validateForm() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !lastName || !email || !message) {
        alert("Missing information. Please fill in all fields.");
    } else {
        // Perform further actions or submit the form
        alert("Form submitted successfully!");
        document.getElementById("formc").reset(); // Reset the form
    }
}

  
  
  // Add more JavaScript code if needed
  