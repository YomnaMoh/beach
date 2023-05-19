window.onload = function() {
    const container = document.querySelector('.animation-container');
    const image = document.querySelector('.animated-image');
  
    function animateImage() {
      const randomX = Math.floor(Math.random() * container.offsetWidth);
      const randomY = Math.floor(Math.random() * container.offsetHeight);
  
      image.style.transform = `translate(${randomX}px, ${randomY}px)`;
  
      requestAnimationFrame(animateImage);
    }
  
    animateImage();
  };
  