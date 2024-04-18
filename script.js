
document.addEventListener('DOMContentLoaded', function() {
  var themeButton1 = document.getElementById('themeButton1');
  var themeButton2 = document.getElementById('themeButton2');
  themeButton1.addEventListener('click', function() {
    var themeValue = themeButton1.getAttribute('data-bs-theme-value');
    if (themeValue === 'polluted') {
      document.body.style.background = 'url("brn.jpg")';
    }
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
  });
  themeButton2.addEventListener('click', function() {
    var themeValue = themeButton2.getAttribute('data-bs-theme-value');
    if (themeValue === 'clean') {
      document.body.style.background = 'url("frt.jpg")';
    }
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center center';
  });
});
