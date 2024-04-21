const cookie = document.getElementById('cookie');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const btn = document.getElementById('btn');

cookie.addEventListener('click', () => {
    toggleScreen();
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    toggleScreen();
});

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

console.log(cookie);