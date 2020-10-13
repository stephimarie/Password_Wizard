var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var numb = "1234567890";
var specChar = "!@#$%^&*+=?><.";

var userSel = [];
var userPass = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { // ask the user the length
  let length = prompt("Choose the length of your password to be between 8 and 128 charachters.");
  if (length < 8) {
      alert("Please make sure you enter at least a number above 8");
      return;
  }
  console.log(length); 

   // ask the user the uppercase
   let upperCharac = confirm("Would you like the password to have upper case letters?");
   if (upperCharac) {
       userSel.push(... upCase);
   }
   console.log(userSel);
 
  
 