
function solve(input) {
    const result = input.map(([width, height]) =>
        ({
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                let result = this.area() - rect.area();

                return result == 0
                    ? this.width - rect.width // if area is equal sort descending by width
                    : result; //sort descending by area
            }
        }))
        .sort((a, b) => b.compareTo(a));
    return result;
}
