//function is a block of code designed to perform a particular task
//function functionName() {};
//function is a keyword
function greet(){
    //block of code
    console.log("hello,my name is muskan");
    console.log("i am learing JavaScript function");
    //block of code
}
//fumction call-> write name of function (greet) with parentheses()
greet();
//function with parentheses
function greetWithName(name){
    console.log("hello,my namr is"+ name);

}
greetWithName("muskan");

//function with multiple parameters
function greetWithFllName(firstName , lastName){
    console.log("hello, my full name is"+ firstName +" "+lastName)
    console.log(`hello,my full name is ${firstName} ${lastName}`);

}
greetWithFllName("muskan","gahlyan");

//function with return values
function addNumber(a,b){
    return a+b;
}
let addresult=addNumber(10,20);
console.log("the sum is "+ addresult);

//subtract twp number
function subNumber(a,b){
    return a-b;
}
let subresult=subNumber(20,10);
console.log("the sum is "+ subresult);