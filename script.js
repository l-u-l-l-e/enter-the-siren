document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      // Apply fade-out class before navigating
      document.body.classList.add('fade-out');
      
      // Wait for the fade-out animation to finish, then navigate
      setTimeout(function() {
        window.location.href = href;
      }, 1000);  // Adjust delay to match the fade-out animation duration (1 second here)
    });
  });
});
