/*1.=============================================================
❓  Print the sum of the array's elements as a single integer.
*/
// 📢 expected output: 40
var arr = [4, 3, 5, 6, 8, 9, 5];
var simpleArrSum = function (arr) {
    var num = 0;
    arr.map(function (val) { return (num += val); });
    console.log("Simple Array Sum: " + num);
};
simpleArrSum(arr);
/*2.===============================================================
❓  A Very Big Sum
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements
*/
var arr1 = [
    1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];
var aVeryBigSum = function (arr) {
    return arr.reduce(function (previousVal, currentVal) { return previousVal + currentVal; });
};
console.log("A very Bigg Num: " + aVeryBigSum(arr1));
/*3.===============================================================
❓  Compare the Triplets
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.*/
// 📢 expected output: [1,1]
var a = [9, 2, 3];
var b = [3, 2, 4];
var compareTriplets = function (arrA, arrB) {
    var aScores = 0;
    var bScrores = 0;
    for (var i in arrA) {
        if (arrA[i] > arrB[i]) {
            aScores++;
        }
        else if (arrA[i] < arrB[i]) {
            bScrores++;
        }
        else
            continue;
    }
    return [aScores, bScrores];
};
console.log("Compare Triplets: " + compareTriplets(a, b));
/*4.===============================================================
❓   Min Max Sum
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements */
// 📢 expected output: 16 24
var arr2 = [1, 3, 5, 7, 9];
var minMax = function (arr) {
    var minTotal, maxTotal;
    minTotal = arr
        .sort()
        .filter(function (_, i) { return i !== arr.length - 1; })
        .reduce(function (a, b) { return a + b; });
    maxTotal = arr
        .sort()
        .filter(function (_, i) { return i !== 0; })
        .reduce(function (a, b) { return a + b; });
    console.log("Min Max Sum: " + minTotal + " " + maxTotal);
};
minMax(arr2);
/*5.===============================================================
❓  Birdthday Cake Candles
  You are in charge of the cake for a child's birthday.
 You have decided the cake will have one candle for each year of their total age.
  They will only be able to blow out the tallest of the candles.
  Count how many candles are tallest **/
// 📢 expected output: 3
// The maximum height candles are 4 units high. There are 3  of them, so return 3.
var candles = [4, 1, 4, 3, 4, 1, 2, 1];
function birthdayCakeCandles(candles) {
    /* 🤔 for some reason the commented code failing in one test case */
    // let largestNumber: number = candles.sort()[candles.length - 1];
    // let countOfLargetNumber: number = candles.filter(
    //   (val) => val == largestNumber
    // ).length;
    // return countOfLargetNumber;
    var count = 0;
    var largestNum = 0;
    for (var i = 0; i < candles.length; i++) {
        var num = candles[i];
        if (num > largestNum) {
            largestNum = num;
            count = 1;
        }
        else if (largestNum == num) {
            count++;
        }
    }
    return count;
}
console.log("Birthday Cake Candles: " + birthdayCakeCandles(candles));
//6.===============================================================
/* 🌎  LINK: https://www.hackerrank.com/challenges/diagonal-difference/problem */
var arr2D = [
    [8, 2, 3],
    [1, 7, 3],
    [3, 6, 1],
];
var diagonalDifference = function (arr) {
    var diagonal1 = 0;
    var diagonal2 = 0;
    for (var i in arr) {
        diagonal1 += arr[i][i];
        diagonal2 += arr.reverse()[i][i];
    }
    return Math.abs(diagonal1 - diagonal2);
};
console.log("Diagonal Difference " + diagonalDifference(arr2D));
//7.===============================================================
/* 🌎  LINK: https://www.hackerrank.com/challenges/plus-minus/problem */
var arr3 = [-4, 3, -9, 0, 4, 1];
var plusMinus = function (arr) {
    var positiveNum = 0, negativeNum = 0, zeroNum = 0;
    for (var i in arr) {
        if (arr[i] > 0) {
            positiveNum++;
        }
        else if (arr[i] < 0) {
            negativeNum++;
        }
        else
            zeroNum++;
    }
    var length = arr.length;
    console.log(positiveNum / length, negativeNum / length, zeroNum / length);
};
plusMinus(arr3);
//8.===============================================================
// 🌎 https://www.hackerrank.com/challenges/staircase/problem
var staircase = function (num) {
    for (var i = 0; i < num; i++) {
        console.log(" ".repeat(num - (i + 1)) + "#".repeat(i + 1));
    }
};
staircase(10);
