#! /usr/bin/env node
import inquirer from "inquirer";
//1st
let myBalance = 20000; //Dollar
let myPin = 12345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: "Enter your pin"
        }
    ]
);
console.log(pinAnswer);
//2nd
//123456 === 12345 = false
if (pinAnswer.pin===myPin) {
    console.log("Correct Pin Code!!!");

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]
);
console.log(operationAns);
//3rd
   if (operationAns.operation === "Withdraw") {
     let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                meassage: "Enter your amount",
                type: "number"
            }
        ]
      );
    
      //4th
     // =, -=, +=
      myBalance -= amountAns.amount;
      console.log("your remaining balance is: " + myBalance);
    
 

//5th
   } else if (operationAns.operation === "Check Balance") {
    console.log("your balance is: " + myBalance);
   
   }
}
else {
    console.log("Incorrect Pin Number");
}