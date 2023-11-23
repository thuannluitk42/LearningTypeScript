class Circle {
    private radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  
    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  

  const myCircle = new Circle(5); 
  
  // In ra chu vi và diện tích
  console.log('Perimeter:', myCircle.calculatePerimeter());
  console.log('Area:', myCircle.calculateArea());
  