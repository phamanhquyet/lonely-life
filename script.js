document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('autoplay').play();
    document.removeEventListener('click', musicPlay);
}
