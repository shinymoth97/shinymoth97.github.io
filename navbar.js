// Define the navbar HTML code
const navbarCode = `
<nav class="topnav" id="myTopnav">
    <a href="index.html" class="nav-link first">
        <div class="container">
            <img src="images/Logotrim.png" class="image">
            <div class="text">Home</div>
        </div>
    </a>
    <a href="downloads.html" class="nav-link">Downloads</a>

    <div class="dropdown">
        <a href="tutorials.html" class="dropbtn nav-link">Tutorials <i class="fa fa-caret-down"></i></a>
        <div class="dropdown-content">
            <a href="scratch.html" class="nav-link">Scratch</a>
            <a href="#" class="nav-link">Html</a>
        </div>
    </div>

    <div class="dropdown">
        <a href="apphub.html" class="dropbtn nav-link">App Hub <i class="fa fa-caret-down"></i></a>
        <div class="dropdown-content">
            <a href="extensions.html" class="nav-link">Extensions</a>
            <a href="websites.html" class="nav-link">Websites</a>
        </div>
    </div>

    <div class="dropdown">
        <a href="shortcuts.html" class="dropbtn nav-link">Shortcuts <i class="fa fa-caret-down"></i></a>
        <div class="dropdown-content">
            <a href="youtube_shortcuts.html" class="nav-link">Youtube</a>
            <a href="chrome_shortcuts.html" class="nav-link">Chrome</a>
        </div>
    </div>

    <a href="contact.html" class="nav-link">Contact</a>

    <a href="javascript:void(0);" class="icon nav-link" onclick="myFunction()">
        <i class="fa fa-bars"></i>
    </a>
</nav>
<div class="icon-bar">
    <a href="https://www.youtube.com/@shinymoth97?sub_confirmation=1" title="Main Youtube Channel" class="fab fa-youtube g"></a>
    <a href="https://youtube.com/@shinymoth97gaming?sub_confirmation=1" title="Gaming Youtube Channel" class="fab fa-youtube b"></a>
    <a href="https://discord.gg/QcrTJg4E" title="Discord Server" class="fab fa-discord"></a>
</div>
`;

// Inject the navbar HTML into the navbarContainer div
document.getElementById('navbarContainer').innerHTML = navbarCode;

// Function to toggle responsive navigation menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Function to handle dropdown behavior
function handleDropdown(e) {
    var isMobileDevice = isMobile();
    var content = this.nextElementSibling; // Get the dropdown content

    // Check if it's a mobile device and dropdown is closed
    if (isMobileDevice && !content.classList.contains('show')) {
        e.preventDefault(); // Prevent default link behavior only on the first click
    }

    // Toggle visibility of the dropdown content
    content.classList.toggle('show');

    // If not on mobile or dropdown is already open, navigate on subsequent clicks
    if (!isMobileDevice || content.classList.contains('show')) {
        window.location.href = this.href; // Navigate to the parent link
    }
}


// Function to handle document click outside dropdown
function handleDocumentClick(e) {
    // Close dropdowns when clicking outside
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(content) {
        if (content.classList.contains('show') && !content.parentNode.contains(e.target)) {
            content.classList.remove('show');
        }
    });
}

// Function to check if the device is mobile based on screen width
function isMobile() {
    return window.matchMedia("(max-width: 750px)").matches;
}

// Attach click event listeners to dropdown buttons
document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtns = document.querySelectorAll('.dropbtn');

    // Loop through each dropdown button
    dropdownBtns.forEach(function(btn) {
        // Add click event listener to the button
        btn.addEventListener('click', handleDropdown);
    });

    // Add document click listener to close dropdowns
    document.addEventListener('click', handleDocumentClick);
});

// Add 'active' class to current page link in navigation menu
const navLinks = document.querySelectorAll(".nav-link");
for (const link of navLinks) {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.removeAttribute("href");
    }
};
