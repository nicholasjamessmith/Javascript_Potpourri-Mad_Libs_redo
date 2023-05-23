//Write a function named setAlarm that has two arguments.
//The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
//The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.
//Example expected output:
//setAlarm(true, true) // => returns false
//setAlarm(false, false) // => returns false
//setAlarm(false, true) // => returns false
//setAlarm(true, false) // => returns true

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

const oddNumberCount = (number) => {
  let result = []
  for (let i = 0; i < number; i++) {
    if (i % 2 != 0) {
      result.push(i)
    }
  }
  return result.length
}
console.log(oddNumberCount(7))
console.log(oddNumberCount(16))

//Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

//Step 1: write a function named trollsBeGone
//Step 2: create a paremeter that can pass through a string as an argument
//Step 3: make the function return a new string
//Step 4: new string should have vowels removed

const trollsBeGone = (stringArgument) => {
  return stringArgument.replaceAll("a", "").replaceAll("i", "").replaceAll("e", "").replaceAll("o", "").replaceAll("u", "").replaceAll("A", "").replaceAll("E", "").replaceAll("I", "").replaceAll("O", "").replaceAll("U", "")
}

console.log(trollsBeGone("Nicholas Was Here"))
console.log(trollsBeGone("Just to prove that ThEre Are Zero Individual Vowels In this Whole sentence, this sentence should be long enough to include all of the vowels"))


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
//Step 4: write a function that accepts "bankInfo" object as an argument
//Step 5: the function should calculate the total of your bank account
//Step 6: the function should return the total of your bank account

const bankInfo = {
  savings: 40,
  checking: -2,
  moneyMarket: 100,
  creditCard: 10
}

const bankAccountSummary = (bankInfo) => {
  return bankInfo.savings + bankInfo.checking + bankInfo.moneyMarket + bankInfo.creditCard
}
console.log(bankAccountSummary(bankInfo))

const bankTotal = 148
const inTheRed = (total) => {
  if (total < 0) {
    return true
  } else {
    return false
  }
}

console.log(inTheRed(bankTotal))