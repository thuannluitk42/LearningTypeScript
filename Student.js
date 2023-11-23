var Student = /** @class */ (function () {
    function Student(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    Student.prototype.display = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Major: ").concat(this.major));
    };
    return Student;
}());

var student1 = new Student('John Doe', 20, 'Computer Science');
student1.display();
