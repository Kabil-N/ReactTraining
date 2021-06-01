function start()
{
    var r="Execute It";      //eventhough after the start exec the var r is available to exec due to the closure the reference will be still available.
    function exec()
    {
        console.log(r);
    }
    return exec;             //it will make a copy and stored as a address and even after the start executes the reference will remain.
}
var result=start();
result();                     //here i am calling the exec function with the address


//Use of closure
    //Even after the function executes it will store the references and the memory context will not be removed.
    //As long as the reference remains the memory context of the function will not be removed.
    
function add(a)
{
    return function(b)
    {
        return a+b;
    }
}
var res=add(4);          //here the execution of add function will be stored,the add function returns the reference of another function.
                         //and the add function takes a single parameter so the value 4 is passed.

console.log(res(6));     //here the res contains the reference of inner function and it takes another parameter so the value 6 is passed
                        //and it will the addition of two numbers.
//another method for closure.

console.log(add(10)(20));  //here it is returning the addition of two numbers due to closure and as long as the reference available.