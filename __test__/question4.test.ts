import { Square, Triangle } from '../__questions__/question4';

describe('Test for square shape', () => {
    it('shoudl return the square of the number', () => {
        var square = new Square(4);
        var area = square.calculateArea();
        expect(area).toBe(16);
    })
})

describe('Test for triangle shape', () => {
    it('shoudl return the area of a triangle', () => {
        var triangle = new Triangle(9, 4);
        var area = triangle.calculateArea();
        expect(area).toBe(18);
    })
})