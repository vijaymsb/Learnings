// new String();    '',"",``
// new Boolean();   true,false
// new number();    1,2,3,...


// these participate major role in constructor properties

// Factory function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    };
}
const circle = createCircle(1);
 
// Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

}
const another = new Circle(1);