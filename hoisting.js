console.log(name); //execution context 1->the name is declared but it is undefined;

var name="Kabil";//if the name is not declared it shows an error

function sayHello(name)  //execution context 2
{
    //var name="Md.Kabil";
    console.log(name);
}
sayHello("Mr.Kabil");//when it is called this execution context executes and poped from the context memory

console.log(name);//it takes the value from the variable which is declared in the line 3