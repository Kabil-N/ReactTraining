var fName=`kabil`;                 //backticks also called literals or string literals. 
var fullName=`${fName} n`;

console.log(fullName);

console.log(fullName.charAt(0));      //displaying the first letter of a string.

console.log(fullName.endsWith("n"));   //display boolean->returns true if it ends with n else false.

console.log(fullName.includes("kabil")); //displays boolean value if it includes the string.

console.log(fullName.indexOf("b"));   //displays the position of the given alphabet.

console.log(fullName.length);     //returns the length of the string.

console.log(fullName.startsWith("k"));  //returns boolean if it startswith the given alphabet.

console.log(fullName.toUpperCase());   //swap to uppercase.

console.log(fullName.search("i"));  //returns the position of the searched element.

