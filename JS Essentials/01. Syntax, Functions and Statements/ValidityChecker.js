function main(coordinates){
    function distanceChecker(x1, y1, x2, y2){
        let a = x1 - x2;
        let b = y1 - y2;
        let distance = Math.sqrt((a * a) + (b * b));

        if(Number.isInteger(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    let x1 = Number(coordinates[0]);
    let y1 = Number(coordinates[1]);
    let x2 = Number(coordinates[2]);
    let y2 = Number(coordinates[3]);

    distanceChecker(x1, y1, 0, 0);
    distanceChecker(x2, y2, 0, 0);
    distanceChecker(x1, y1, x2, y2);
}