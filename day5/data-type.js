console.log("day5")

//let is keyword for variable declaration

//string
let Name = "Pooja";
console.log(Name);

//number
let age = 20;
console.log(age);
console.log("my age is " + age);
console.log("my age is", age);

//float
let height = 5.2;
console.log(height)

//boolean
let ismarried = false;
console.log(ismarried);

//is js case sensitive
let a = 10;
let A = 20;
console.log(a, A);
//js is case sensitive

//undefined
let x;
console.log(x);

//null
let y = null;
console.log(y);

//object data type
//let objectname={key1:value1,key2:value2}
//key is string,value can be of any datatype
let person = {
    "name": "pooja",
    "age": 20,
    "city": "samalkha"
}
console.log(person);

let address = {
    "key1": "string value",//value is string
    "key2": 1234,//value is number
    "homeAddress": { "city": "samalkha" },//value is object
    "officeAddress": { "city": "noida" },//value is object
}

console.log(address);
console.log(address.homeAddress.city);
//print city of office address
console.log("my office city is " + address.officeAddress.city)

//array data type
let myFriends=["Tanisha","Nandini","Muskan","Gunn"];
console.log(myFriends);
console.log(myFriends[1]);
console.log("my friends are "+myFriends[1]+" and "+myFriends[2]);  //string concatenation
console.log(`my friends are ${myFriends[1]} and ${myFriends[2]}`);  //template literal

//date data type
let currentDate=new Date();
console.log(currentDate);
let myDOB=new Date("2005-03-17");
console.log(myDOB);
console.log("dob year "+myDOB.getFullYear()); //get year from date
console.log("dob month "+(myDOB.getMonth() + 1)); //added 1 bacause month is 0 indexed in js
console.log("dob day "+ (myDOB.getDate()+1)); //get day from date


console.log("my expression "+ 1+1); //"my expression " 1 + 1 ->my expression 11
console.log("my expression "+ (1+1)); //"my expression" +2->my expression 2