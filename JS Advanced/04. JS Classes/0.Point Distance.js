class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance (firstPoint, secondPoint) {
        const first = Math.pow(firstPoint.x - secondPoint.x, 2);
        const second = Math.pow(firstPoint.y - secondPoint.y, 2);
        const distance = Math.sqrt(first + second);

        return distance;
    }
}