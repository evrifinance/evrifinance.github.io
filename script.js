document.addEventListener('DOMContentLoaded', function () {
    // Get current local time
    const currentTime = new Date().getHours();

    // Determine day or night mode
    const isNightMode = currentTime < 8 || currentTime >= 17;

    // Apply day or night mode styles
    if (isNightMode) {
        document.body.classList.add('night-mode');
    }

    // Update timestamps in the bottom right corner
    const updateTimestamp = () => {
        const currentDate = new Date();
        const timestamp = currentDate.toLocaleString();

        document.getElementById('html-timestamp').innerText = `HTML: ${timestamp}`;
        document.getElementById('css-timestamp').innerText = `CSS: ${timestamp}`;
        document.getElementById('js-timestamp').innerText = `JS: ${timestamp}`;
    };

    // Initial update
    updateTimestamp();

    // Periodically update timestamps every 60 seconds
    setInterval(updateTimestamp, 60000);
});
