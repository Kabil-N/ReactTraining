class Detail
{
    constructor()                            //it is default to use constructor inv the class.
    {
        this.age=20;
    }
    printAge()
    {
        console.log(this.age);
    }
}
class User extends Detail{
    constructor(name)
    {
        super();                               //to inherit the properties of the parent class.
        this.name=name;
    }
    printMyDetails()
    {
        console.log(this.name);
    }
}
const user=new User("Kabil");

user.printMyDetails();
user.printAge();                       //since the use of super we can access the parent class method by creating the method of child class.
