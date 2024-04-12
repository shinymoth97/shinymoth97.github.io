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

    <a href="contact.html" class="dropbtn nav-link">Contact</a>

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

// Add 'active' class to current page link in navigation menu
const navLinks = document.querySelectorAll(".nav-link");
for (const link of navLinks) {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.removeAttribute("href");
    }
}

// Function to adjust the scroll margin for headings based on navbar height
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('nav');
    var headings = document.querySelectorAll('h3');

    if (navbar) {
        var navbarHeight = navbar.offsetHeight;

        headings.forEach(function (heading) {
            heading.style.scrollMarginTop = (navbarHeight + 30) + 'px';
        });
    }
});


// JavaScript to toggle dropdown on mobile
document.querySelectorAll('.dropbtn').forEach(item => {
    item.addEventListener('click', event => {
        const dropdownContent = item.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});
