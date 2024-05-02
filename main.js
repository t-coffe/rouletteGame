import './style.css'

const roulette = document.querySelector('.roulette');
const btnTurn = document.querySelector('.roulette button');
let old = 0;

btnTurn.addEventListener('click', ()=> {
    const change = (old + Math.floor(Math.random() * 360))%360;
    roulette.style.transform = `rotate(${change+350}deg)`
})