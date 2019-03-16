// Camel Notation: oneTwoThreeFour -starts with small letter - used in factory funtion
// Pascal Notation: OneTwoThreeFour - Starts with capital letter - used in constructor funtion

// Factory funtion

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new  Circle(1);

