//Write a function named setAlarm that has two arguments.
//The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
//The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.
//Example expected output:
//setAlarm(true, true) // => returns false
//setAlarm(false, false) // => returns false
//setAlarm(false, true) // => returns false
//setAlarm(true, false) // => returns true
//Pseudocode:
//Create a function named setAlarm
//{
//  const vacationing = () => {
//    console.log(true)
//  }
//  const employed = () => {
//    console.log(false)
//  }
//  const setAlarm = (employmentStatus) => {
//    employmentStatus()
//  }
//  setAlarm(vacationing)
//  setAlarm(employed)
//  setAlarm(vacationing, employed)
//}

const setAlarm = (employed, vacationing) => {
  if (employed === true && vacationing === false) {
    return true
  } else {
    return false
  }
}

const setAlarm2 = (employed, vacationing) => {
  if (employed === true && vacationing === false) {
    return true
  }
  return false
}

console.log(setAlarm(false, false))
console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
console.log(setAlarm2(false, false))
console.log(setAlarm2(true, false))

//Count Odd Numbers
//Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.
//step 1: create a function
//const oddNumberCount = (number) => {
// return how many odd numbers are below "number"
//if (number % 2 !== 1) {
//}
//    let
//      //create a counter
//      let count = 0;
//  //
//}
//step 2: create a parameter that can receive the argument: a number.
//step 3: create a "return" that will return the number of positive odd numbers there are below the number passed into the argument
// (x / 2) --> round down 
//const oddNumberCount = (num) => {
//  console.log(num)
////console.log(num / 2).math.floor
//  return (num/2).math.floor
//}
//console.log(oddNumberCount(5));
//Example expected output:
//oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
//oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)

//Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

//Step 1: write a function named trollsBeGone
//Step 2: create an arguemnt that is a (string) sentence.
//Step 3: create another function that takes the argument and returns a new version of the original string without any vowels
//const trollsBeGone = (stringArgument) => {
//  console.log(stringArgument);
//}
//Example expected output:
//trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"

//Bank Account Summary
//Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)

//savings
//checking
//moneyMarket
//creditCard
//Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.

//Step 1: create an object named bankInfo *
//Step 2: include the keys listed as items in the object "bankInfo" *
//Step 3: give each key a number value (either negative or positive) *
//Step 4: write a function that accepts "bankInfo" object as an argument *
//Step 5: the function should calculate the total of your bank account
//Step 6: the function should return the total of your bank account

const bankInfo = {
  savings: 40,
  checking: -2,
  moneyMarket: 100,
  creditCard: 10,
};

console.log(Object.values(bankInfo))

//parameters
//const bankAccountSummary = (bankInfo) = {
//}
  
//=> { Object.values(bankInfo).reduce((savings, checking, moneyMarket, creditCard) => savings + checking + moneyMarket + creditCard, 0) };

//console.log(input.savings + input.checking + input.moneyMarket + input.creditCard);
