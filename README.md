
# Credit Card Checker

Website that allows users to verify whether a credit card number is valid or not and provides information about credit card company.


## Tech Stack

**Technologies used:**  HTML, CSS, and JavaScript 


## Features

The website includes a form where users can enter a credit card number and a validation algorithm that checks whether the number is valid or not. And what company is credit card's issuer.

Also provides examples of valid CC numbers to try it.

## Algorithm Overview:

- the credit card number is first checked for validity using the Luhn algorithm, which verifies that the number satisfies a certain mathematical formula.
- if the credit card number passes the Luhn algorithm check, the website then checks the first few digits of the number to determine the type of card (e.g. Visa, Mastercard, Amex).
- if the credit card number fails either of these checks, the website displays an error message indicating that the number is invalid.

**Explanation:**

- the Luhn algorithm works by summing up the digits of the credit card number, starting from the second-to-last digit and working backwards. 

- at first we remove the rightmost digit from the card number. 

- loop through the array backwards

- take the digits at each of the even indices (0, 2, 4, 6, etc.) and double them. 

- if any of the results are greater than 9, subtract 9 from those numbers.

- add together all of the results and add the removed rightmost digit

- if the result is divisible by 10, the number is a valid card number. If it's not, the card number is not valid.

- the type of card based is determined on the first few digits of the credit card number. 

- for example, if the first digit is 4, the card is likely a Visa card. 
## Contributing


I welcome all contributions! Here are some ways you can get started:

- report bugs: If you encounter any bugs, please let me know. Open up an issue and let me know the problem.
- contribute code: If you are a developer and want to contribute, follow the instructions below to get started!
- suggestions: If you don't want to code but have some awesome ideas, open up an issue explaining some updates or imporvements you would like to see!
- documentation: If you see the need for some additional documentation, feel free to add some!
## Instruction

- fork this repository
- clone your forked repository
- add your code
- commit and push
- create a pull request
- star this repository
- wait for pull request to merge