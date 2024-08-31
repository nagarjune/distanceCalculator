// distanceCalculator.js
(function(global) {
    // Define the distanceCalculator object
    var distanceCalculator = {
        // Distance calculation using a new formula
        calculateDistance: function(x1, y1, x2, y2) {
            // Example formula: sqrt((x2 - x1)^2 + (y2 - y1)^2)
            var dx = x2 - x1;
            var dy = y2 - y1;
            return Math.sqrt(dx * dx + dy * dy);
        }
    };

    // Expose the distanceCalculator object to the global scope
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = distanceCalculator;
    } else {
        global.distanceCalculator = distanceCalculator;
    }
})(this);
