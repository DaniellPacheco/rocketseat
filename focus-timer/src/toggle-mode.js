let darkMode = true;

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    // acessar o html - document.documentElement
    document.documentElement.classList.toggle('light');

    const mode = darkMode ? 'light' : 'dark';
    
    event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`;

    darkMode = !darkMode;
})