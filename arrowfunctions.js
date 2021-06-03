//normal function for finding the even numbers.

var even=function(e)
{
    return e%2==0;               //it returns true if the number is even.
}
console.log(even(2));

//arrow function for finding the even numbers.

var even=(e)=>(e%2==0);         //it also return true if the number is even.

console.log(even(5));

//function to return true if all the array elements are even numbers.

var res=[2,4,6,8,10].every((e)=>(e%2==0));     //every->go through all the elements in the array like loop and arrow function returns true if they
//are even numbers.

console.log(res);

var r=[2,3,5,6,8].every((e)=>(e%2==0));        //here it returns because all the elements in the array are not even numbers.
console.log(r);

const myName=function(name)
{
    console.log(`My name is ${name}`);
}
myName("Kabil");

//using arrow functions.

const myFName=name=>(console.log(`My first name is ${name}`));  
myFName("Kabil");

//notes of arrow functions.
//1.if the count of passing arguments is 1 dont need to include the ()braces.
//2.more than 1 argument u should compulsoraily use braces.
//ex:

const myDetails=(name,age)=>(console.log(`The details are:Name:${name} and Age:${age}`));
myDetails("kabil",20);