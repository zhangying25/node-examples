module.exports = function(x, y, callback) {
    try {
        if (x < 0 || y < 0) {
            throw new Error("Rectangle dimension should be greater than zero: length = " + x + " breadth = " + y);
        }

        callback(null, {
            perimeter: function() {
                return 2 * (x + y);
            },
            area: function() {
                return x * y;
            }
        });
    } catch (error) {
        callback(error, null);
    }
}
