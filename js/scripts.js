let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    let currentSlide = slides[slideIndex - 1];
    currentSlide.style.display = 'block';

    let scale = 1.0;
    let zoomInterval = setInterval(function () {
        if (scale >= 2.05) {
            clearInterval(zoomInterval);
        } else {
            scale += 0.005;
            currentSlide.style.transform = `scale(${scale})`;
        }
    }, 50);

    setTimeout(function () {
        currentSlide.style.transform = 'scale(1.05)';
    }, 2000);

    setTimeout(showSlides, 5000);
}

showSlides();
