
function solve(input) {
    const result = input
        .map(([width, height]) => ({
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                let result = rect.area() - this.area();

                return result == 0
                    ? rect.width - this.width // if area is equal sort descending by width
                    : result //sort descending by area
            }
        }))
        .sort((a, b) => a.compareTo(b));
    return result;

}

