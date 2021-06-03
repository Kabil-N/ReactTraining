states=["TamilNadu","Assam","Punjab","Maharashtra"];
//for loop for iterating in the array
for(let i=0;i<states.length;i++)
{
    console.log(states[i]);
}
//forEach->simply like arrow function doesnt need initialization or conditon  
states.forEach((e)=>console.log(e));

//forof loop->iterating through the array
for(const n of states)
{
    console.log(n);
}

//forin loop->iterating through the objects
var user={
    firstName:"Kabil",
    lastName:"N",
    loggedIn:true,
    age:18,
}

for(const n in user)
{
    console.log(`the key ${n} for the corresponding value is ${user[n]}`);
}
//n->returrns key...user[n]->returns values for the corresponding key