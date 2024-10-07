/*<script>
// Реализация параллакса
document.addEventListener('scroll', function() {
    // Получаем значение прокрутки
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Находим SVG-элемент
    const parallaxElement = document.querySelector('.upside');

    // Устанавливаем смещение элемента на основе прокрутки (например, медленнее прокрутки)
    let offset = scrollTop * 0.5;

    // Применяем смещение через transform
    parallaxElement.style.transform = `translateY(${offset}px)`;
});
</script>*/

/*let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // Hide all slides
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
    slides[slideIndex - 1].style.opacity = "1"; // Show the current slide
    
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    
    const slides = document.getElementsByClassName("slide");
    
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0"; // Hide all slides
    }
    
    slides[slideIndex - 1].style.opacity = "1"; // Show the current slide
}

// Initialize the slider
showSlides();*/

let currentImageIndex = 0;
const imageCount = 4;

function showInfo(infoId) {
    const infos = document.querySelectorAll('.info');
    const additionalImage = document.getElementById('additional-image');
    
    // Скрываем все информационные блоки
    infos.forEach(info => {
        info.style.display = 'none';
    });

    // Показываем нужный информационный блок
    document.getElementById(infoId).style.display = 'block';

    // Проверяем, была ли нажата последняя картинка
    if (infoId === 'info3' || infoId === 'info4') {
        additionalImage.style.display = 'block'; // Показываем дополнительное изображение
    } else {
        additionalImage.style.display = 'none'; // Скрываем дополнительное изображение
    }
}

function changeImage(direction) {
    const images = document.querySelectorAll('.image');
    const infos = document.querySelectorAll('.info');
    const additionalImage = document.getElementById('additional-image');

    // Скрываем текущее изображение и информацию
    images[currentImageIndex].querySelector('img').style.opacity = '0.5';
    infos[currentImageIndex].style.display = 'none';

    // Обновляем индекс изображения
    currentImageIndex = (currentImageIndex + direction) % imageCount;

    if (currentImageIndex < 0) {
        currentImageIndex = imageCount - 1; // Циклический переход в обратную сторону
    }

    // Показываем новое изображение и информацию
    images[currentImageIndex].querySelector('img').style.opacity = '1';
    infos[currentImageIndex].style.display = 'block';

    // Проверяем, нужно ли показывать дополнительное изображение
    if (currentImageIndex === 2 || currentImageIndex === 3) {
        additionalImage.style.display = 'block'; // Показываем дополнительное изображение
    } else {
        additionalImage.style.display = 'none'; // Скрываем дополнительное изображение
    }
}

function showEntryText(show) {
    const entryText = document.getElementById('entry-text');
    if (show) {
        entryText.classList.add('show'); // Добавляем класс для показа текста
    } else {
        entryText.classList.remove('show'); // Убираем класс для скрытия текста
    }
}