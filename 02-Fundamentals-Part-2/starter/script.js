'use strict';
/*
    Challenge 1
const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`LMAO`);
    }
}
let avgDolphins = calcAverage(85, 54, 41);
let avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
//Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

    Challenge 2
function calcTip(bills) {
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] > 49 && bills[i] < 301) {
            tip = 0.15 * bills[i];
        } else {
            tip = 0.2 * bills[i];
        }
        total.push(tip + bills[i]);
        tips.push(tip);
    }
    return (total)
}
var tip;
var tips = [];
var total = [];
var bills = [125, 555, 44];
console.log(bills)
console.log(calcTip(bills));

    Challenge 3

const mark = {
    firstName: 'Mark ',
    lastName: 'Miller',
    fullName: this.firstName + this.lastName,
    height: 1.69,
    weight: 78,
    BMI: function () {
        return this.weight / (this.height ** 2);
    },
};
const john = {
    firstName: 'John ',
    lastName: 'Smith',
    fullName: this.firstName + this.lastName,
    height: 1.95,
    weight: 92,
    BMI: function () {
        return Number(this.weight / (this.height ** 2));
    },
};
console.log(`${john.BMI() > mark.BMI() ? `John's BMI (${john.BMI()})` : `Mark's BMI (${mark.BMI()})`} is greater than ${john.BMI() < mark.BMI() ? `John's BMI (${john.BMI()})` : `Mark's BMI (${mark.BMI()})`}`);


    Challenge 4

function calcTip(bills) {
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] > 49 && bills[i] < 301) {
            tip = 0.15 * bills[i];
        } else {
            tip = 0.2 * bills[i];
        }
        total.push(tip + bills[i]);
        tips.push(tip);
    }
    return (total)
}
function calcAverage(total) {
    var sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum = sum + total[i];
    }
    return (sum / total.length)
}
var tip;
var tips = [];
var total = [];
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);
console.log(calcTip(bills));
console.log(calcAverage(total));
*/