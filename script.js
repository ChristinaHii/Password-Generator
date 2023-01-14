// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

////// 1. Function to prompt user for the amount of characters in the user password
function getPasswordOptions() {
  let length = parseInt (
    prompt("How many characters you like to have?")
  )
  // if user enter not a number, this will prompt
  if(isNaN(length) === true){
  alert('Please enter number between 10 to 64');
  return;
  }
  if(length < 10){
    alert('Password length must be at least 10 characters');
    return;
  }
  if(length > 64){
    alert('Password length must be less than 64 characters');
    return;
  }
  //2. Function to prompt user for the type of characters in the user password
  // Numeric characters
  let incNumericCharacters = confirm(
    "Do you want numeric characters?"
  )
  // Special characters
  let incSpecialCharacters = confirm(
    "Do you want special characters?"
  )
  // Lower case characters
  let incLowerCaseCharacters = confirm(
    "Do you want lower case characters?"
  )
  // Upper case characters
  let incUpperCaseCharacters = confirm(
    "Do you want uppper case characters?"
  )
  // if user not select any types of characters, this will prompt
  if(incNumericCharacters === false &&
  incSpecialCharacters === false &&
  incLowerCaseCharacters === false &&
  incUpperCaseCharacters === false){
  alert('Please choose one type of character.');
  return;
  }

  let PasswordOptions = {
    length: length,
    incNumericCharacters: incNumericCharacters,
    incSpecialCharacters: incSpecialCharacters,
    incLowerCaseCharacters: incLowerCaseCharacters,
    incUpperCaseCharacters: incUpperCaseCharacters
  }
  return PasswordOptions;
}

/// 3. Function for getting a random element from an array
function getRandom(arr) {
  let random = Math.floor(Math.random()*arr.length)
  let ranEle = arr[random];
  return ranEle;
}
// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []
  let possibleCharacters = []
  let guaranteedCharacters = []

  if(options.incNumericCharacters){
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters))
  }
  if(options.incSpecialCharacters){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }
  if(options.incLowerCaseCharacters){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters))
  }
  if(options.incUpperCaseCharacters){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters))
  }

  for(let i = 0; i < options.length; i++){
    var generate = getRandom(possibleCharacters);
    console.log(generate)
    result.push(generate);
  }

  console.log(result);
  return result.join("")
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);