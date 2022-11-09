function parseCount(value) {
    let result = Number.parseInt(value); 
    const error = new Error("Невалидное значение");
    if (isNaN(result)) {
        throw error;
} 
    return result;
}

function validateCount(valueTwo) {
  try {
    let result = this.parseCount(valueTwo);
    return result;
} catch(error) {
    console.log(error);
    return error;
}
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;    
    if (a + b < c || a + c < b || c + b < a) {
        throw new Error("Треугольник с такими сторонами не существует");
    }   
    }  

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
         getArea() {
            return "Ошибка! Треугольник не существует";
        },
         getPerimeter() {
            return "Ошибка! Треугольник не существует";
        } 
    }
    }
}