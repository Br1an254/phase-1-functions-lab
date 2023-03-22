function distanceFromHqInBlocks(pickUpFromHq) {
   if(pickUpFromHq > 42) {
    return pickUpFromHq - 42;
   } else {
    return 42 - pickUpFromHq;
   }
  
  }
  
  function distanceFromHqInFeet(someValue) {
    let distanceFromHq = distanceFromHqInBlocks(50)
    return distanceFromHq *= 264 // distance from hq in feet.

  }
  

  function distanceTravelledInFeet(start, destination) {
     //returns the number of feet traveled
    return Math.abs(start - destination) * 264;
  }
  // distanceTravelledInFeet(10, 20)

  function calculatesFarePrice(start, destination) {
    let distanceInFeet =  distanceTravelledInFeet(34, 32);
       if(distanceInFeet < 400) {
        return 0;
       } else if(distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 2 /100; // convert cents to dollars
       } else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
       } else {
        return 'cannot travel that far';
       }
  }
console.log(calculatesFarePrice())
