var obj=function(firstName,courseCount)
{
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCoursecount=function()
    {
        console.log(`${this.firstName} has the course count of ${this.courseCount}`);
    };
};

obj.prototype.getfirstName=function()
{
    console.log(`Your first name is ${this.firstName}`);
}//proto can make getter or setter method or any other generated functions;


var kabil=new obj("Kabil",3);
if(kabil.hasOwnProperty("firstName"))     //it checks whether it has the property of firstName and then prints;
{
    kabil.getfirstName();
}

kabil.getCoursecount();

var jivi=new obj("jivi",2);

jivi.getfirstName();           //it blindly calls the function if the property doesnt exist it crashes;
jivi.getCoursecount();

