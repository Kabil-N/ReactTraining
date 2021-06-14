var obj={num:2}

var add=function(a)
{
    return this.num+a;
}

console.log(add.call(obj,1));  //the first argument should be object and the second argument should be the parameter for the function.


var arr=[1,2,3];

console.log(add.apply(obj,arr));
//the apply func takes the second argument as a array too

var bound=add.bind(obj);  //it will return the function 



console.log(bound(1));
