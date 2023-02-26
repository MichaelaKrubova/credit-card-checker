// Valid credit card numbers example
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]


const verifyNumber = document.getElementById("verify");
const cardNumber  = document.getElementById("number");
const validNote = document.getElementById("valid");
const invalidNote = document.getElementById("invalid");
const company = document.getElementById("company");
const noteStyle = document.getElementById("note")



///check if the card is valid or not
const validateCred = (array) => {
    let dubledNums = [];
    for(let i = array.length - 2; i >= 0; i--) {
        if( (array.length - 2) % 2 === 0) {
          if (i % 2 === 0){
            dubledNums.push(array[i] * 2);
        }
          else  {
            dubledNums.push(array[i] );
            }
        }
        else { 
          if (i % 2 === 0){
            dubledNums.push(array[i]) ;
        }
          else  {
            dubledNums.push(array[i] * 2 );
        }
      

      }
    }

    const decreasedArray = [];
    for(let i = 0; i < dubledNums.length; i++) {
      if(dubledNums[i] > 9) {
        decreasedArray.push(dubledNums[i] - 9);
      }
      else {decreasedArray.push(dubledNums[i])};
    }
    
    let arraySum = array[array.length - 1];
        for(let i = 0; i < decreasedArray.length; i++) {
            arraySum += decreasedArray[i];
        }
    return arraySum % 10 === 0;
    }
    

    //find name of credit card company 
const cardCompanies = (cardNum) => {
  
  let company = [];
    if(cardNum[0] === 3) {
      company.push("Amex (American Express)")
    }
    else if (cardNum[0] === 4) {
      company.push("Visa")
    }
    else if (cardNum[0] === 5) {
      company.push("Mastercard")
    }
    else if (cardNum[0] === 6) {
      company.push("Discover")
    }
    else if (cardNum[0] < 4 || cardNum[0] > 6 ){
      console.log("Company not found")};

      console.log(company);
      
      return company;

}

const validation = () => {
  const num = cardNumber.value;
  const strArr = num.split("");
  const numArr = strArr.map((str) => {
    return parseInt(str);
  })


  if(validateCred(numArr)) {
    validNote.innerHTML = "Your credit card number is valid";
    invalidNote.classList.add("hide");
    validNote.classList.remove("hide");
    company.classList.remove("hide");
    company.innerHTML = "Your credit card company: "+cardCompanies(numArr);
    
    noteStyle.classList.add("valid");
    noteStyle.classList.remove("invalid");
  } else {
    
    invalidNote.innerHTML = "Your credit card number is invalid! Please check your number and correct it.";
    validNote.classList.add("hide");
    invalidNote.classList.remove("hide");
    company.classList.add("hide");
    
    noteStyle.classList.add("invalid");
    noteStyle.classList.remove("valid");
  }

  console.log(cardCompanies(numArr));

  
}

verifyNumber.addEventListener("click", validation);

    




