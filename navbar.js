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

    <p href="#" class="nav-link icon banner" onclick="myFunction()">
        shinymoth97's Website
    </p>

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
    var content = this.nextElementSibling; // Get the dropdown content

    if (isMobile()) {
        e.preventDefault(); // Prevent default link behavior on mobile devices
        // Toggle visibility of the dropdown content
        content.classList.toggle('show');

        // If the dropdown is already open, allow navigation after showing the dropdown
        if (content.classList.contains('show')) {
            // Remove the click event listener to prevent further toggling
            this.removeEventListener('click', handleDropdown);
            this.addEventListener('click', navigateOrToggleDropdown); // Change the event listener to navigate the link or toggle dropdown
        } else {
            // Restore click event listener to show dropdown on next click
            this.addEventListener('click', handleDropdown);
        }
    } else {
        // Non-mobile behavior (direct navigation on click)
        window.location.href = this.href;
    }
}

// Function to navigate to the link destination or toggle dropdown
function navigateOrToggleDropdown(e) {
    var content = this.nextElementSibling; // Get the dropdown content

    if (!content.classList.contains('show')) {
        // Show the dropdown if it's not already shown
        content.classList.add('show');
    } else {
        // Navigate to the link destination
        window.location.href = this.href;
    }
}

// Function to handle document click outside dropdown
function handleDocumentClick(e) {
    // Close dropdowns when clicking outside
    var dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(function(content) {
        if (content.classList.contains('show') && !content.parentNode.contains(e.target)) {
            content.classList.remove('show');
            // Restore the click event listener for parent links
            var parentLink = content.parentNode.querySelector('.dropbtn');
            parentLink.addEventListener('click', handleDropdown);
        }
    });

    // Restore click event listener for all dropdown buttons
    var dropdownBtns = document.querySelectorAll('.dropbtn');
    dropdownBtns.forEach(function(btn) {
        btn.addEventListener('click', handleDropdown);
    });
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

// Function to check if the device is mobile based on screen width
function isMobile() {
    return window.matchMedia("(max-width: 600px)").matches;
}

// Add 'active' class to current page link in navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll(".nav-link");
    for (const link of navLinks) {
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.removeAttribute("href");
        }
    }
});

// Dynamically adjust scroll-margin-top based on the height of the nav element
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('nav');
    var headings = document.querySelectorAll('h3');

    if (navbar) {
        var navbarHeight = navbar.offsetHeight;

        headings.forEach(function (heading) {
            heading.style.scrollMarginTop = (navbarHeight + 50) + 'px';
        });
    }
});