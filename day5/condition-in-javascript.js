//if else statement 
let age=20;
if(age>=18){
    console.log("you are an adult.");
}
    else if(age >=13 && age < 18){
        console.log("you are an teenager.")
    }
    
    else if( age < 60){
        console.log("you are senior citizen.")
    }
    
    else{
        console.log("you are minor.")
    }

//switch statement 
let day=4;
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("invalid day");
}