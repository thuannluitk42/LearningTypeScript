class Student {
    name: string;
    age: number;
    major: string;
  
    constructor(name: string, age: number, major: string) {
      this.name = name;
      this.age = age;
      this.major = major;
    }
  
    display(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
  }
  
  const student1 = new Student('John Doe', 20, 'Computer Science');
  student1.display();
  