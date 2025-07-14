

//Grabs the toggle button from HTML
const themeToggleButton = document.getElementById('themeToggle');

// Listens for click 
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});