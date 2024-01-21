window.onload = function() {
    var body = document.getElementById('body');
    var currentHour = new Date().getHours();
    if (currentHour >= 17 || currentHour < 8) {
        body.className = "night-mode";
    } else {
        body.className = "day-mode";
    }
};
