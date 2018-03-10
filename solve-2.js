var rect = require('./rectangle-2');

function solveRect(length, breadth) {
    console.log("Solving for rectangle with length = " + length + " and breadth = " + breadth);
    rect(length, breadth, function(error, rectangle) {
        if (error) {
            console.log(error);
        } else {
            console.log("Area of the rectangle is : " + rectangle.area(length, breadth));
            console.log("Perimeter of the rectangle is : " + rectangle.perimeter(length, breadth));
        }
    });
};

solveRect(2, 4);
solveRect(-1, 3);
solveRect(1, -3);
solveRect(0, 3);
