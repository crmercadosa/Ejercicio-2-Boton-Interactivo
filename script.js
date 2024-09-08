const botonRosa = document.getElementById('boton');
const phrases = [
    'Da click',
    'JavaScript',
    'Desarrollo Servicios Web',
    'Aplicacion Web',
    'Web'
];
let currentIndex = 0;

botonRosa.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % phrases.length;
    botonRosa.textContent = phrases[currentIndex];
});