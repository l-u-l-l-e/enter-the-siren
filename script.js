document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();  // Prevent immediate navigation
      const href = this.getAttribute('href');

      // Apply fade-out class
      document.body.classList.add('fade-out');
      
      // Wait for the fade-out animation to finish before navigating
      setTimeout(function() {
        window.location.href = href;
      }, 500);  // Matches the CSS fade-out animation duration
    });
  });
});
