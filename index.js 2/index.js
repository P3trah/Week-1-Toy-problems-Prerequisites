function checkSpeed(speed) {
    if (speed < 70) {
        return "Ok";
    } else {
        let overSpeed = speed - 70;
        let points = Math.floor(overSpeed / 5);
        return `Points: ${points}`;
    }
}

function calculatePoints(speed) {
    let points = checkSpeed(speed);
    points = points.split(' ')[1];

    if (points > 12) {
        return "License suspended";
    } else {
        return points;
    }
}

console.log(calculatePoints(80)); // "Points: 2"
console.log(calculatePoints(95)); // "License suspended"