document.addEventListener('DOMContentLoaded', function () {
    // Get current local time
    const currentTime = new Date().getHours();

    // Determine day or night mode
    const isNightMode = currentTime < 8 || currentTime >= 17;

    // Apply day or night mode styles
    if (isNightMode) {
        document.body.classList.add('night-mode');
    }

    document.addEventListener('DOMContentLoaded', async function () {
    // Function to fetch the last commit information for a specific file
    async function getLastCommit(file) {
        const apiUrl = `https://api.github.com/repos/evrifinance/evrifinance.github.io/commits?path=${file}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data[0]?.commit?.committer?.date || 'N/A';
    }

    // Get last commit timestamps for the three files
    const htmlTimestamp = await getLastCommit('index.html');
    const cssTimestamp = await getLastCommit('styles.css');
    const jsTimestamp = await getLastCommit('script.js');

    // Update timestamps in the bottom right corner
    document.getElementById('html-timestamp').innerText = `HTML: ${htmlTimestamp}`;
    document.getElementById('css-timestamp').innerText = `CSS: ${cssTimestamp}`;
    document.getElementById('js-timestamp').innerText = `JS: ${jsTimestamp}`;
});
    
    // Initial update
    updateTimestamp();

    // Periodically update timestamps every 60 seconds
    setInterval(updateTimestamp, 60000);
});
