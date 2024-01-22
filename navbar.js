const navbarCode = `
<nav>

<a href="index.html" class="nav-link">
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
</nav>
`;
document.getElementById('navbarContainer').innerHTML = navbarCode;