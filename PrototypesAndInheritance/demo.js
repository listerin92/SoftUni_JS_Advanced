function classHierarchy() {
    class Figure {
        constructor(unit = 'cm') {
            this.unit = unit;
        }

        get area() {
            return NaN;
        }

        changeUnits(x) {
            this.unit = x;
        }

        calcWidthUnit(x) {
            const units = {
                m: 0.01,
                cm: 1,
                mm: 10,
            };

            return x * units[this.unit];
        }

        toString() {
            return `Figures units: ${this.unit} Area: ${this.area}`;
        }
    }

    class Circle extends Figure {
        constructor(radius = 0, ...rest) {
            super(...rest);
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(super.calcWidthUnit(this.radius), 2);
        }

        toString() {
            return `${super.toString()} - radius: ${super.calcWidthUnit(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width = 0, height = 0, ...rest) {
            super(...rest);
            this._width = width;
            this._height = height;
        }

        get height() {
            return this.calcWidthUnit(this._height);
        }

        get width() {
            return this.calcWidthUnit(this._width);
        }

        set height(newHeight) {
            this._height = newHeight;
        }

        set width(newWidth) {
            this._width = newWidth;
        }

        get area() {
            return this.calcWidthUnit(this._width) * this.calcWidthUnit(this._height);
        }

        toString() {
            return `${super.toString()} - width: ${this.calcWidthUnit(this._width)}, height: ${this.calcWidthUnit(this._height)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}
let asdf = classHierarchy();
let c = new asdf.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new asdf.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
