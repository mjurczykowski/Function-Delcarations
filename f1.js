/*
** This is the file f1.js
** Read each comment below, declare each function.
** These are all PURE FUNCTIONS, they only depend and change the input values.
*/


/*******************************NUMBER FOCUSED****************************/

// (1) First Task
// Declare a function named double() which outputs a number double the input number.

function double(x) {
    return x*x;
}





// (2) Second Task
// Declare a function named plusplus() which outputs a number one higher than the input number.

function plusplus(x) {
    x+1;
}





// (3) Third Task
// Declare a function named oppRecip() which outputs the opposite reciprocal of the input number.
function oppRecip(x){
    return x;
}






// (4) Fourth Task
// Declare a function named pthagorean() which has two inputs you guessed it a and b.
// The function outputs the value of the third side of the right triangle.


function pthagorean(a,b){
   return (a*a)+(b*b);
}




// (5) Fifth Task
// Declare a function named circleArea() which has one input named radius.
// The function outputs the area of the circle.

function circleArea(radius){
    return (radius*radius)*3.14;
}





// (6) Sixth Task
// Declare a function named boxVolume() which has three inputs: length, width, and depth.
// The function outputs the volume of the box;

function boxVolume(length,width,depth){
    return length*width*height;
}





/**************************** STRING FOCUSED *********************************/



// (7) Seventh Task
// Declare a function named thisIsMadness() which accepts one string input named city.
// The function should output the string: "No! This is <city>!!"

function thisIsMadness(city) {
    return 'No! This is '+city+'!!';






// (8) Eigth Task
// Declare a function named yo() which accepts one string input named fam.
// The function should output the string: "yo <fam>!  What's good <fam>??"

function yo(fam) {
    return 'yo'+fam+'! Whats good '+fam+'??';
}



// (9) Ninth Task
// Declare a function named beefDay() which has no inputs.
// This function should output a long string, IN ALL CAPS, of "BEEF DAY" with lots of extra E's, F's, A's, and Y's

function beefDay(){
    return 'BEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEF DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY';
}






/**************************** BOOLEAN FOCUSED *******************************/


// (10) Tenth Task
// Declare a function named xor() which has two inputs a and b.
// This function returns the exclusive or of the two boolean inputs.

function xor(a,b) {
    return (a&&(!b))||(b&&(!a));
}

let x = 5;
console.log(`For the next few examples let x = ${x}`);
console.log(`1. double the number = ${double(x)}`);
console.log(`2. adding one to the number = ${plusplus(x)}`);
console.log(`3. the opposite reciprocal of ${x} is ${oppRecip(x)}`);
console.log(`4. the pythagorean theorem does 5 = ${pythagorean(3,4)}?`);
console.log(`5. the circle with radius ${x} has area = ${circleArea(x)}`);
console.log(`6. the volume of a ${x}, ${2*x}, ${3*x} box has volume = ${boxVolume(x,2*x,3*x)}`);
console.log(`7. ${thisIsMadness("SPARTA")}`);
console.log(`8. ${yo("dude")}`);
console.log(`9. ${beefDay()}`);
console.log(`10. first test: true == ${xor(true,false)} == ${xor(false,true)}`);
console.log(`10. second test: false == ${xor(true,true)} == ${xor(false,false)}`);






/**************************** END OF FILE *******************************
