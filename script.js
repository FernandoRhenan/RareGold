document.addEventListener('DOMContentLoaded', start);

function start() {

    window.addEventListener('scroll', checkWinHeight);

}

function checkWinHeight() {
    const area2 = document.getElementById('area2-expositionArea');
    const imgHeightTop = area2.getBoundingClientRect().top+350
    const windowHeight = window.innerHeight;
    if (imgHeightTop < windowHeight) {
        area2.style.opacity = '1';
        area2.style.transform = 'translateY(-250px)';
    }
}