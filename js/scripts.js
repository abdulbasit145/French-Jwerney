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

const partnerImages = document.querySelectorAll('.partner-image');
        const prevButton = document.getElementById('prevPartner');
        const nextButton = document.getElementById('nextPartner');
        let currentPartnerIndex = 0;

        // Function to show the current partner image and hide others
        function showCurrentPartner() {
            for (let i = 0; i < partnerImages.length; i++) {
                partnerImages[i].style.opacity = '0.5';
            }
            partnerImages[currentPartnerIndex].style.opacity = '1';
        }

        // Event listener for previous button
        prevButton.addEventListener('click', () => {
            currentPartnerIndex = (currentPartnerIndex - 1 + partnerImages.length) % partnerImages.length;
            showCurrentPartner();
        });

        // Event listener for next button
        nextButton.addEventListener('click', () => {
            currentPartnerIndex = (currentPartnerIndex + 1) % partnerImages.length;
            showCurrentPartner();
        });

        // Show the initial partner image
        showCurrentPartner();