// const prompt = require("prompt-sync")({ sigint: true });
// const age = prompt("How old are you? ");
// console.log(`You are ${age} years old.`);

function sum(Num1,Num2){
    console.log('Sum of ',Num1,' ',Num2,'=',Num1 + Num2);
}
function Subt(Num1,Num2){
    console.log('Subtraction of ',Num1,Num2,'=',Num1-Num2);
}
function multi(Num1,Num2){
    console.log('Multiplacation of ',Num1,Num2,'=',Num1*Num2);
}
function divi(Num1,Num2){
    console.log('Divition of ',Num1,Num2,'=',Num1/Num2);
}
function rema(Num1,Num2){
    console.log('Remainder of ',Num1,Num2,'=',Num1%Num2);
}
while(1==1){
    const prompt = require("prompt-sync")({ sigint: true });
    console.log("operations: 1-sum, 2-subtraction, 3-multipl, 4-Divi, 5-remainder");
    console.log(' ');
    console.log("Enter 'q' to quit app");
    const op = prompt("Enter mode of operation : ");
    if(op=='q'){
        break;
    }
    let Num1 =prompt("Enter 1st number : ");
    let Num2=prompt("Enter 2nd number : ");
    if (op==1){
        sum(Num1,Num2);
    }
    else if (op==2){
        Subt(Num1,Num2);
    }
    else if (op==3){
        multi(Num1,Num2);
    }
    else if(op==4){
        divi(Num1,Num2);
    }
    else if(op==5){
        rema(Num1,Num2);
    }
    else{
        break;
    }
}
