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
    get keyboard() {
        return this.#keyboard;
    }
    set keyboard(value) {
        if (!(value instanceof Keyboard)) {
            throw new TypeError('It is not a instance of a Keyboard class');
        }
        this.#keyboard = value;
    }
    get monitor() {
        return this.#monitor;
    }
    set monitor(value) {
        if (!(value instanceof Monitor)) {
            throw new TypeError('It is not a instance of a Monitor class');
        }
        this.#monitor = value;
    }
}


function createMixins() {
    // TODO:  Create the mixins - computerQualityMixin and styleMixin,  with all of their embedded functions
    function computerQualityMixin(classToExtend) {
        Object.assign(classToExtend.prototype, computerQualityMixin);
        function getQuality() {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }
        function isFast() {
            return (this.processorSpeed > (this.ram / 4));
        }
        function isRoomy() {
            return (this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed));
        }
    }
    function styleMixin(classToExtend) {
        Object.assign(classToExtend.prototype, styleMixin);

        function isFullSet() {
            return (this.manifucaturer.localeCompare())
        }
    }
}

let mixins = createMixins();
let computerQualityMixin = mixins.computerQualityMixin(Desktop);
let styleMixin = mixins.styleMixin;

console.log(computerQualityMixin(Desktop));
styleMixin(Desktop);
computerQualityMixin(Laptop);
styleMixin(Laptop);