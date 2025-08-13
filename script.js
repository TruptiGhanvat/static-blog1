document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
      <div class="container">
        <h1>My Simple Blog</h1>
        <nav>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="post1.html">Posts</a>
        </nav>
      </div>
    </header>`;
    
    const footerHTML = `
    <footer>
      <p>&copy; 2025 My Simple Blog</p>
    </footer>`;

    document.querySelectorAll(".site-header").forEach(el => el.innerHTML = headerHTML);
    document.querySelectorAll(".site-footer").forEach(el => el.innerHTML = footerHTML);
});
