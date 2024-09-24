document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      document.body.classList.add('fade-out');  // Apply the fade-out class
      setTimeout(function() {
        window.location.href = href;
      }, 1000);  // Adjust delay to match the fade-out time (1 second here)
    });
  });
});
