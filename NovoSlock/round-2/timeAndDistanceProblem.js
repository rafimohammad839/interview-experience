/* Question:
  Distance from x to y is 400km. Moving speed is 20km/hr.
  You step back 2km after taking each 5km step forward.
  On the step back, your speed changes to 5km/hr. Find out
  the time taken to reach y from x.
  time for 5km (in minute) = 
*/
function getDistance(
  distance,
  forwardSpeed,
  stepForwardDistance,
  stepBackDistance,
  backwardSpeed
) {
  let finalStep = stepForwardDistance - stepBackDistance; // final step length
  let timeTaken1 = (stepForwardDistance / forwardSpeed) * 60; // for 5km in mins
  let timeTaken2 = (stepBackDistance / backwardSpeed) * 60; // for 2km in mins
  let timeTakenFinal = timeTaken1 + timeTaken2; // for 3km in mins

  let totalSteps = distance / finalStep;
  let totalTimeInMins = totalSteps * timeTakenFinal;
  let totalTimeInHours = totalTimeInMins / 60;
  totalTimeInHours = totalTimeInHours.round();
  // Answer in round figure
  return totalTimeInHours + " hours";
}

Number.prototype.round = function (precision) {
  let multiplier = Math.pow(10, precision || 1);
  let result = Math.round(this * multiplier) / multiplier;
  return result;
};

// let distance = 400, speed = 20, step = 5, stepBackDistance = 2, backwardSpeed = 5;
console.log(
  `Time taken to reach y position from x position is ${getDistance(
    400,
    20,
    5,
    2,
    5
  )}`
);
