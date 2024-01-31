function changeAlphabet() {
    var letters = document.getElementById('letters');
    var alphabetList = document.getElementById('alphabet');
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    letters.style.display = 'none';
    alphabetList.innerHTML = '';

    for (var i = 0; i < alphabet.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = alphabet[i];
        alphabetList.appendChild(listItem);
    }

    alphabetList.style.display = 'flex';
}

function changeBack() {
    var letters = document.getElementById('letters');
    var alphabetList = document.getElementById('alphabet');

    letters.style.display = 'block';
    alphabetList.style.display = 'none';
}

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function nextSlide() {
    if (currentIndex < totalSlides - 3) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function updateCarousel() {
    const offset = -currentIndex * (100 / 3);
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

