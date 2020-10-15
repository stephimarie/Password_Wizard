var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var numb = "1234567890";
var specChar = "!@#$%^&()',/\|`~{[}]*+=?><.-_";

var userSel = [];
var userPass = [];
var length = 8;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { // ask the user the length
  let length = prompt("Choose the length of your password to be between 8 and 128 charachters.");
  
  if (length > 8 && length < 128) {
      alert ("Great, just a few more questions.")
   } else {
        alert("Please make sure you enter at least a number above 8 and no greater then 128");
      return;
      }

  console.log(length); 
  

   // ask the user the uppercase start code ----pushed ---Works 
//    let upperCharac = confirm("Would you like the password to have upper case letters?");
//    if (upperCharac) {
//        userSel.push(... upCase);
//    }
//    console.log(userSel);

    // ask the user the uppercase - just a test prompt 
    let upperCharac = prompt("Which upper case letters would you like the password to have?");
    // Comeing up false --- even when upcase typed in ???
    if (userPass === upCase) {  
        alert ("Great, just a few more questions.")
    }   else {
        alert("Please make sure you enter at least one letter.")
        return;
    }

    console.log(userSel);

    // ask the user the lowercase
    let lowerCharac = confirm("Would you like the password to have lower case letters?");
    if (lowerCharac) {
        userSel.push(... lowCase);
       
    }
    console.log(userSel);
  
    // ask the user the special characters
    let special = confirm("Would you like the password to have special characters?");
    if (special) {
        userSel.push(... specChar);
    }
    console.log(userSel);
  
    // ask the user the numbers
    let numbers = confirm("Would you like the password to have numbers?");
    if (numbers) {
        userSel.push(... numb);
    }
    console.log(userSel);

    // Check if array is empty -------- Check at this point 
    // function checkArray() { 
    //     let emptyArray = []; 
        // let nonExistantArray = undefined; 
        // let fineArray = [1, 2, 3, 4, 5]; 

        // if (typeof emptyArray != "undefined"  
        //             && emptyArray != null  
        //             && emptyArray.length != null  
        //             && emptyArray.length > 0); {
                       
        //                 output = true; 
                       
        //                 else 
                           
        //                 output = false; 
        //             }
        //   console.log("undefined array");

        // document.querySelector('.output-empty').textContent 
        //         = output; 

        // if (typeof nonExistantArray != "undefined"  
        //             && nonExistantArray != null  
        //             && nonExistantArray.length != null  
        //             && nonExistantArray.length > 0) 
        //     output = true; 
        // else 
        //     output = false; 

        // document.querySelector('.output-non').textContent 
        //         = output; 

        // if (typeof fineArray != "undefined"  
        //             && fineArray != null  
        //             && fineArray.length != null  
        //             && fineArray.length > 0) 
        //     output = true; 
        // else 
        //     output = false; 

        // document.querySelector('.output-ok').textContent 
        //         = output; 
    } 
  
    for (let i = 0; i < length; i++) {
      userPass.push(userSel[Math.floor(Math.random() * userSel.length)]);
      console.log(userPass.join("+"));

  }

    var passwordText = document.querySelector("#password");

    passwordText.value = userPass.join("");{

    }
  
  generateBtn.addEventListener("click", writePassword);

 
  
 