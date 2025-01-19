// Select the theme selector and logo image
const themeSelector = document.getElementById('theme-selector');
const logo = document.getElementById('logo');

// Define the changeTheme function
function changeTheme() {
    const selectedTheme = themeSelector.value;

    // Check which theme is selected
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark'); // Add dark theme class
        logo.src = 'byui-logo_white.webp'; // Change to white logo
    } else {
        document.body.classList.remove('dark'); // Remove dark theme class
        logo.src = 'byui-logo_blue.webp'; // Change to blue logo
    }
}

// Add event listener for changes on the select element
themeSelector.addEventListener('change', changeTheme);

// Initial theme setup based on default selected value
changeTheme();
