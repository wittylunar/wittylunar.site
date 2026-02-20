document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  
  const text = 'Welcome to wittylunar.site';
  const typewriterElement = document.getElementById('typewriter');
  let index = 0;
  
  function type() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }
  
  type();
});
