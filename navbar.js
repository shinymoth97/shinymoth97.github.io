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
    <a href="#" class="nav-link">Scratch</a>
	<a href="#" class="nav-link">Html</a>
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