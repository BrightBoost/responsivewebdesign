var boxes = document.querySelectorAll('.box');

boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    this.style.backgroundColor = 'green';
  });
});
