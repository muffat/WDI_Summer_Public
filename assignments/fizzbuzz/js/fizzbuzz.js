// Your code goes here
var numbersArray = [];
for (var i = 1; i <= 100; i++) {
  numbersArray.push(i);
}

var alter = _.map(numbersArray, function(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    number = "FizzBuzz";
  } else if (number % 3 === 0) {
    number = "Fizz";
  } else if (number % 5 === 0) {
    number = "Buzz";
  }
  return number;
});