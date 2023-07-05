window.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    var content = document.getElementById('content');
  
    button.addEventListener('click', function() {
      content.style.color = getRandomColor();
    });
  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  