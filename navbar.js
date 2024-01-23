const navbarCode = `
<nav class="topnav" id="myTopnav">

<a href="index.html" class="nav-link first">
<div class="container">
<img src="images/Logotrim.png" class="image">
<div class="text">
Home</div>
</div>
</a>
<a href="downloads.html" class="nav-link">Downloads</a>

<div class="dropdown">
  <a href="#" class="dropbtn nav-link">Tutorials <i class="fa fa-caret-down"></i></a>
  <div class="dropdown-content">
    <a href="scratch.html" class="nav-link">Scratch</a>
	<a href="#" class="nav-link">Html</a>
  </div>
</div>

<div class="dropdown">
  <a href="#" class="dropbtn nav-link">App Hub <i class="fa fa-caret-down"></i></a>
  <div class="dropdown-content">
    <a href="extensions.html" class="nav-link">Extensions</a>
    <a href="websites.html" class="nav-link">Websites</a>
  </div>
</div>

<div class="dropdown">
  <a href="#" class="dropbtn nav-link">Shortcuts <i class="fa fa-caret-down"></i></a>
  <div class="dropdown-content">
    <a href="youtube_shortcuts.html" class="nav-link">Youtube</a>
  </div>
</div>

<a href="contact.html" class="dropbtn nav-link">Contact</a>

<a href="#" class="nav-link">About</a>

<a href="javascript:void(0);" class="icon nav-link" onclick="myFunction()">
    <i class="fa fa-bars"></i></a>
</nav>
`;
document.getElementById('navbarContainer').innerHTML = navbarCode;

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
const navLinks = document.querySelectorAll(".nav-link");
for (const link of navLinks) {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.removeAttribute("href");
  }
}

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