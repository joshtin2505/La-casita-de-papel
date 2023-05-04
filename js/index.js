const twoItem = document.querySelector('.two-it');
const mostrar2 = document.querySelector('.hov2');

twoItem.addEventListener('mouseover', () => {
    mostrar2.style.transition = '0.7s';
    mostrar2.style.opacity = '1';
});
twoItem.addEventListener('mouseout', () => {
    mostrar2.style.transition = '0.7s';
    mostrar2.style.opacity = '0';
});