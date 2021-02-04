## WARMUP - LOGIC

Given two nums, return their sum. Unless the two values are the same, 
then return double their sum.

We have two monkeys, a and b, and the variables aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. 

We have a loud talking parrot. The "hour" variable is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

Given two temperatures, return true if one is less than 0 and the other is greater than 100.

Given 2 nums, a and b, return true if one if them is 10 or if their sum is 10.

Given 2 nums, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

Given 2 num values, return true if either of them is in the range 10..20 inclusive.

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

We'll say that a number is "teen" if it is in the range 13..19 inclusive. Given 2 int values, return true if one or the other is teen, but not both.

Given three nums, a b c, return the largest.

Given 2 nums, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.

## HARDER - LOGIC

When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

You and your date are trying to get a table at a restaurant. The variable "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

Given 2 nums, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

Given a number n, return true if n is in the range 1..10, inclusive. Unless outsideMode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

Return true if the given non-negative number is 1 or 2 more than a multiple of 20. 

Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false.

Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

## LOOPS     -for and while

Create a program which returns the total of all odd numbers up to and including n.

Create a program that takes a number n and returns the sum of all square numbers up to and including n.

Create a program that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

Create a program that takes two variables (start, stop), and returns the sum of all even numbers in the range.

Create a program, that will for a given a, b, c, do the following:
    Add a to itself b times.
    Check if the result is divisible by c.

## SOLO PROJECTS

# 1 Population Predictor
Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

You must calculate the number of people there will be in three decades from now.

The variable population is the world population now.
Assume that every month, someone gives birth to more people, n.
Return the number of people there will be when the spaceship is complete.

# 2 Polygon Area Finder
Make a calculator that takes in from the user a 
    shape (or number of sides)
    side lengths
and outputs the area
Circle, Square, Triangle, etc.



## DONE