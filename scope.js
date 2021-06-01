var fname="Kabil";           //the name variable is declared globally  and it can be accessed anywhere.

console.log(fname);        

function sayName()
{
    console.log(fname);      //it will display the name from line 1 since it is globally declared.
} 
sayName();


function companyName()
{
    var cname="Rently";
    console.log(cname);       //it will display the cname from line 14 as it is globally declared.
}
companyName();
function details()
{
    var cname="Rently";
    info();
    function info()
    {
        console.log(`I am ${fname} and I have started my carrer at ${cname}`);   //here it displays the fname from line1(globally declared)
         //and cname from line20(locally declared).
    }
}
details();

//info about scopes
       //the smaller memory context can ask for larger memory context (the variable declared in global can be accessed in the function
       //when it does'nt has a variable declared in the scope. )