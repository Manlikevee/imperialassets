document.addEventListener('DOMContentLoaded', () => {
    const savedMode = Cookies.get('darkMode');
    const isDarkMode = savedMode ? JSON.parse(savedMode) : false;

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    toggleDarkModeButton.addEventListener('click', () => {
        const newMode = !document.body.classList.contains('dark-mode');
        Cookies.set('darkMode', JSON.stringify(newMode), { expires: 365 });

        document.body.classList.toggle('dark-mode', newMode);
        document.body.classList.toggle('light-mode', !newMode);
    });
});