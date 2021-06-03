const arr=[1,2,3,4,5]
const mapfunc=arr.map(e=>e+10);
console.log(mapfunc);

const filterfunc=arr.filter(e=>e==2||e==5);
console.log(filterfunc);

const a=["k","a","b","i","l"];m
console.log(a.join(''));

var cities=["Chennai","Dubai","Punjab","Coimbatore"];

cities[0]="Pollachi";//change the value by using the index;
console.log(cities);

console.log(cities.pop());//it removes the last element from the array and return the popped element

cities.unshift("Chennai","Mumbai");
console.log(cities);//unshift->it adds the element in the beggining of an array;

cities.shift();
console.table(cities);//shft->it removes the first element in the array;

//using arrow function to fnd every element in the array is even or add;
//every-> returns boolean values if all the value in the array is even it returns true else false;
var result=[2,4,35,42,56].every((e)=>{
    return e%2==0;
});
console.log(result);
console.log(cities);
console.log(cities.slice(2));//if we give one argument then it removes argument-1 and it prints the remaining
console.log(cities.slice(1,3));//if we give two arguments it prints the range given values(start,end-1)
cities.splice(1,0,'TamilNadu');//splice->the first argument-> the position where to insert and the second-> the delete count to replace and the third ->what to be replaced
console.log(cities);