
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open'); // Toggles the open class
});

const menuItems = document.querySelectorAll('.menu li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-open'); // Ensures the menu closes
    });
});
// -------------image changing-----------

function updateImageSource() {
    var img = document.getElementById('myImage');
    if (window.innerWidth <= 900) {
        img.src = './images/car.png'; // Change to new image source
    } else {
        img.src = './images/main-img2.png'; // Revert to the initial image source
    }
}

// Initial check
updateImageSource();

// Add event listener for window resize
window.addEventListener('resize', updateImageSource);
