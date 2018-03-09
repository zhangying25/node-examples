var rect = require('./rectangle-1');

function solveRect(length, breadth) {
    console.log("Solving for rectangle with length = " + length + " and breadth = " + breadth);

    if (length <= 0 || breadth <= 0) {
        console.log("Rectangle dimension should be greater than 0. Length = " + length + ", and Breadth = " + breadth);
    } else {
        console.log("Area of the rectangle is : " + rect.area(length, breadth));
        console.log("Perimeter of the rectangle is : " + rect.perimeter(length, breadth));
    }
};

solveRect(2, 4);
solveRect(-1, 3);
solveRect(1, -3);
solveRect(0, 3);
