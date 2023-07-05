const toggleButton = document.getElementById('toggleButton');
const responsiveImage = document.getElementById('responsiveImage');

toggleButton.addEventListener('click', function() {
  if (responsiveImage.style.objectFit === 'contain') {
    responsiveImage.style.objectFit = 'cover';
  } else {
    responsiveImage.style.objectFit = 'contain';
  }
});
