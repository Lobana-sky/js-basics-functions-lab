// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
    // each block = 264 feet
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(from, to) {
    return Math.abs(from - to) * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
        return 0;
    } else if (feet < 2000) {
        feet -= 400; 
        return 0.02 * feet;
    } else if (feet > 2500) {
        return "cannot travel that far";
    } 
    return 25;
}