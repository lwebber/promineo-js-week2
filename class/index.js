/* We have a loud talking parrot. The "hour" variable is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
Return true if we are in trouble. */

var hour = 5;
var talking = true;
var inTrouble;


if ((talking) && (hour < 7 || hour > 20)) {
    inTrouble = true;
    console.log(inTrouble);
}