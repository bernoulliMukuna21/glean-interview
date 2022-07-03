interface Shape {
    side1: number;
    side2?: number;
    calculateArea(): number;
}

export class Square implements Shape{
    side1: number;

    constructor(side: number){
        this.side1 = side;
    }

    calculateArea() {
        return Math.pow(this.side1, 2);
    }
}

export class Triangle implements Shape{
    side1: number;
    side2: number;

    constructor(height: number, base: number){
        this.side1 = height;
        this.side2 = base;
    }
    calculateArea(){
        return (this.side1 * this.side2) / 2;
    }
}

// Run square 
const side = 5
const square = new Square(side);
console.log(`Area of square ( side=${side} ): `, square.calculateArea());

// Run triangle
const height = 13;
const base = 12;
const triangle = new Triangle(height, base);
console.log(`Area of triangle ( height=${height} & base=${base} ): `, triangle.calculateArea());