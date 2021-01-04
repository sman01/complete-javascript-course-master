/*
    Challenge 1

Case1
massJohn = 92;
heightJohn = 1.95;
massMark = 78;
heightMark = 1.69;
Case2
massJohn = 85;
heightJohn = 1.76;
massMark = 95;
heightMark = 1.88;
BMIJohn = massJohn / (heightJohn ** 2);
BMIMark = massMark / (heightMark ** 2);
markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

    Challenge 2

BMIMark = 28.3;
BMIJohn = 23.8;
if (BMIJohn > BMIMark) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})`);
}

    Challenge 3

avgKoala = (109 + 95 + 123) / 3;
avgDolhphin = (97 + 112 + 101) / 3;

if (avgDolhphin > avgKoala && avgDolhphin > 99) {
    console.log("dolphin wins");
} else if (avgDolhphin < avgKoala && avgKoala > 99) {
    console.log("koala wins");
} else if (avgKoala === avgDolhphin && avgDolhphin > 99) {
    console.log("draw");
} else {
    console.log("lmao");
}

    Challenge 4
*/
const bill = 430
tip = bill > 49 && bill < 301 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`)