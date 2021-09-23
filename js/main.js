function iniciar() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', presionar, false);
}
function presionar() {
    var video = document.getElementById('video');
    video.play();
}
window.addEventListener('load', iniciar, false);
