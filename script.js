document.addEventListener('DOMContentLoaded', function() {
    var object = document.querySelector('.heart');
    var photol = document.querySelector('.photo-left');
    var photor = document.querySelector('.photo-right');
    var text = document.querySelector('.hiddentext');
  
    object.addEventListener('click', function() {

        photol.classList.toggle('show');
        photor.classList.toggle('show');
        text.classList.toggle('show');
    });
  });