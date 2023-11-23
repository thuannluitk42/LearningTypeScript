var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var myCircle = new Circle(5);
// In ra chu vi và diện tích
console.log('Perimeter:', myCircle.calculatePerimeter());
console.log('Area:', myCircle.calculateArea());
