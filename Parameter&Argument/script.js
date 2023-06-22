//Passing values (Arguments and Parameters)
/*let invitation=function(name){//local variable to this function
    console.log(`Welcome! ${name} You are invited on our event`);
}

invitation();//Welcome! undefined You are invited on our event
invitation("marie");//Welcome! marie You are invited on our event
invitation("Harry");//Welcome! Harry You are invited on our event


//here name is parameter
//here marie=is argument

*/

let invitation=function(name = "defaultName",time='night'){//local variable to this function
    console.log(`Welcome! ${name} You are invited on our event and time will be ${time}`);
}

invitation(); //Welcome! defaultName You are invited on our event and time will be night
invitation("marie","morning"); //Welcome! marie You are invited on our event and time will be morning
invitation("Harry ","morning"); //Welcome! Harry  You are invited on our event and time will be morning



//Returning values(How to return value from the function)

/*let ageCalculation=function(birthYear,currentYear) {
    let age =currentYear - birthYear;
    console.log(`Your current age is =${age}`);

}
ageCalculation(2005,2023);//Your current age is =18
*/


let ageCalculation=function(birthYear,currentYear=2023) {
    let age =currentYear - birthYear;
    return age;

}
console.log(ageCalculation(2005));//18




