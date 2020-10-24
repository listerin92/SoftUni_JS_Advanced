function solve() {
    //TODO: implement all the classes, with their properties
    class Manifacturer {
        constructor(manufacturer) {
            if (new.target === Manifacturer) {
                throw new Error('Cannot instantiate directly.')
            }
            this.manufacturer = manufacturer;
        }

    }
    class Keyboard extends Manifacturer {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Manifacturer {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Manifacturer {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Computer extends Manifacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly.')
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        #battery;
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
            //Instance of the Battery class
        }
        get battery() {
            return this.#battery;
        }
        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('It is not a instance of a Battery class');
            }
            this.#battery = value;

        }
    }
    class Desktop extends Computer {
        #keyboard;
        #monitor;
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard(){
            return this.#keyboard;
        }
        set keyboard(value){
            if (!(value instanceof Keyboard)) {
                throw new TypeError('It is not a instance of a Keyboard class');           
            }
            this.#keyboard = value;
        }
        get monitor(){
            return this.#monitor;
        }
        set monitor(value){
            if (!(value instanceof Monitor)) {
                throw new TypeError('It is not a instance of a Monitor class');           
            }
            this.#monitor = value;
        }
    }
    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop,
    }
}
let ch = solve();
let battery = new ch.Battery('ChinaBattery', 3);
let battery2 = new ch.Monitor('Dell', 24, 20);
let newComputer = new ch.Laptop('Acer', 4500, 16, 256, 100, 'blue', battery);
console.log(newComputer);

// •	Keyboard  class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	responseTime - number property for the response time of the Keyboard
// •	Monitor class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	width - number property for the width of the screen
// o	height - number property for the height of the screen
// •	Battery class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	expectedLife - number property for the expected years of life of the battery
// •	Computer - abstract class that contains:
// o	manufacturer - string property for the name of the manufacturer
// o	processorSpeed - a number property containing the speed of the processor in GHz
// o	ram - a number property containing the RAM of the computer in Gigabytes
// o	hardDiskSpace - a number property containing the hard disk space in Terabytes
// •	Laptop - class extending the Computer class that contains:
// o	weight - a number property containing the weight of the Laptop in Kilograms
// o	color - a string property containing the color of the Laptop
// o	battery - an instance of the Battery class containing the laptop's battery. There should be a getter and a setter for the property and validation that the passed in argument is actually an instance of the Battery class.
// •	Desktop - concrete class extending the Computer class that contains:
// o	keyboard - an instance of the Keyboard class containing the Desktop PC's Keyboard. There should be a getter and a setter for the property and validation that the passed in argument is actually an instance of the Keyboard class.
// o	monitor - an instance of the Monitor class containing the Desktop PC's Monitor. There should be a getter and a setter for the property and validation that the passed in argument is an instance of the Monitor class.
