//  ... ->spread and rest operator.

//usage of spread operator ->It is used to split up array elements or object properties.

//ex:const newArray=[...oldArray,1,2] ->here it copies the old array and adding new values such as 1,2 in the newArray.

//In object: const newObject={...oldObject,newProp:5} ->here it copies the old object into newObj with new properties.

//usage of rest operator ->used to merge a list of function argument into an array.

//ex:function sortValues(..args)
//{
    //return args.sort()
//}

//it changes the function arguments into an array so that we can do the array operations using the array.

//example for spread operator in array.

const num=[1,2,3,4]

const newNum=[...num,5]   //copies the num array elements into newNum.

console.log(newNum);

//example for spread operator in object.
const person={
    name:'Kabil'
};

const newPerson={
    ...person,         //copies the person details into newPerson.
    age:20
}

console.log(newPerson);
console.log(newPerson.name);  //using dot operator we can take the value needed.


//rest operator

const sortArr=(...args)=>{     //combines the function arguments into an array so that we can perform array functions
    return args.sort();
}

console.log(sortArr(1,5,4,7,8,9));

