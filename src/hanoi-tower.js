module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsAmount = (Math.pow(2, disksNumber) - 1);
    let speedInSeconds = (turnsSpeed / 3600 );
    
    return {
        turns : turnsAmount,
        seconds : +((turnsAmount / speedInSeconds).toPrecision(17))
    };
}