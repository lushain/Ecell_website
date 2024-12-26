
var swiper= new Swiper(".slide-content",{
    sliderPerView: 1,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor:'true',
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        dynamicBullets: true,  
    },
  
})
var swiper= new Swiper(".slide-content1",{
    sliderPerView: 1,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor:'true',
    pagination: {
        el:".swiper-pagination",
        clickable: true,
        dynamicBullets: true,  
    },
  
})

const colorBox = document.getElementById('colorBox');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Change color based on scroll position
    if (scrollPosition < 600) {
        colorBox.style.backgroundColor = 'red';
    } else if (scrollPosition < 950) {
        colorBox.style.backgroundColor = 'green';
    } else if (scrollPosition < 1050) {
        colorBox.style.backgroundColor = 'yellow';
    } else {
        colorBox.style.backgroundColor = 'red';
    }
});
const colorBox1 = document.getElementById('colorBox1');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Change color based on scroll position
    if (scrollPosition < 600) {
        colorBox1.style.backgroundColor = 'red';
    } else if (scrollPosition < 950) {
        colorBox1.style.backgroundColor = 'green';
    } else if (scrollPosition < 1050) {
        colorBox1.style.backgroundColor = 'yellow';
    } else  {
        colorBox1.style.backgroundColor = 'red';
    }
});
const colorBox2 = document.getElementById('colorBox2');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Change color based on scroll position
    if (scrollPosition < 600) {
        colorBox2.style.backgroundColor = 'red';
    } else if (scrollPosition < 950) {
        colorBox2.style.backgroundColor = 'green';
    } else if (scrollPosition < 1050) {
        colorBox2.style.backgroundColor = 'yellow';
    } else {
        colorBox2.style.backgroundColor = 'red';
    }
});