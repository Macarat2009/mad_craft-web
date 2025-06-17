console.log('Script loaded');

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.classList.add('aktivni');
    setTimeout(() => {
      window.location.href = this.href;
    }, 100);
  });
});