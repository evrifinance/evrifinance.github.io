window.onload = function() {
    var body = document.getElementById('body');
    var currentHour = new Date().getHours();
    if (currentHour >= 17 || currentHour < 8) {
        body.className = "night-mode";
    } else {
        body.className = "day-mode";
    }

    // Update timestamps
    document.getElementById('styles-update').textContent = 'Styles Update: ' + new Date();
    document.getElementById('index-update').textContent = 'Index Update: ' + new Date();
    document.getElementById('script-update').textContent = 'Script Update: ' + new Date();
};
