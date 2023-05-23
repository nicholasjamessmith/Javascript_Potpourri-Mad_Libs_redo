console.log("Hello World")
const words = {
  number: "",
  adjective: "",
  pluralNoun: "",
  adverb: "",
  anotherAdejctive: ""
}

//Start by creating a function called startMadlib that 'prompts' a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the 'number' key in our 'words' object:

//Step1
//Create a function called startMadlib
const startMadlib = (word) => { 
//Step 2
//Create a prompt withim the function that requests user to enter each word type
  prompt("Give me a " + Object.keys(words)[0]);
//Step 3
  
//Make function save their input to the appropriate object key
  
}
//console.log(Object.keys(words)[0])
startMadlib()
//prompt("Give me a " + Object.keys(words)[0])
//prompt("Give me a " + Object.keys(words)[1])