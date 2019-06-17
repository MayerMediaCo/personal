if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', user => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}

const mainNav = document.getElementById('js-menu');
const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});
