document.addEventListener('DOMContentLoaded', function() {
    var showMoreButton = document.querySelector('.show-more-container');
    var additionalContent = document.querySelector('.additional-content');
  
    showMoreButton.addEventListener('click', function() {

         console.log('Button clicked!');
         console.log('Current display style:', additionalContent.style.display);

      if (additionalContent.style.display === 'none') {
        additionalContent.style.display = 'block';
        showMoreButton.querySelector('p').textContent = 'Show Less';
      } else {
        additionalContent.style.display = 'none';
        showMoreButton.querySelector('p').textContent = 'Show More';
      }
    
    });
  });
  