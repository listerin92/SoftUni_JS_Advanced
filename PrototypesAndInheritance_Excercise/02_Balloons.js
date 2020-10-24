function solve() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon =
            {
                color: ribbonColor,
                length: ribbonLength
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }
    }
    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon,
    }
}


let asdf = solve();

let pb = new asdf.PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
console.log(pb.ribbon.color);

let bb = new asdf.BirthdayBalloon('blue', 200, 'yellow', 10);

console.log(bb);
