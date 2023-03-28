//declare arr. of int.{arr. of nums. = [15, 30, 65, 90, 75, 0, 120];
// and target
// sort in asc. order
//loop through the first 5 num for the fir. num. and 
// initialize sec.  num after 1st 
//nd third num. last num


let target = 120;
function findThreeNumbers(numbers, target) {
 let arrayofInt = [15, 30, 65, 90, 75, 0, 120];
arrayofInt.sort(function(a, b){return a-b});//asc. order
 
//loop for 1st num. dec. of 2nd nd 3rd num.

   
    for (let i = 0; i < arrayofInt.length - 2; i++) {
      let secondnum = i + 1;
      let thirdnum = arrayofInt.length - 1;
      while (secondnum < thirdnum) {
    const sum = numbers[i] + numbers[secondnum] + numbers[thirdnum];
  
      if (sum === target) {
          return [numbers[i], numbers[secondnum], numbers[thirdnum]];
        } else if (sum < target) {
          secondnum++;
        } else if(sum > target){
          thirdnum--;
        }
      }
    }
  
}
findThreeNumbers([15, 30, 65, 90, 75, 0, 120], 120);
