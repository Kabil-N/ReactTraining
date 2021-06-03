//block scope

//for,if,switch,while->block.

//wherever {}(curly brackets) then it is a block. 

//In ES6 the const and let allows users to declare variables in the block scope.

function user()
{
    if(1)
    {
        var name="Kabil";   //exists in function scope.
        const age=6;        //exists in block scope.
        let id=65;          //exists in block scope.
    }
    console.log(name);    //displays name.
    console.log(age);     //not defined.     
    console.log(id);      //not defined.
}
user();