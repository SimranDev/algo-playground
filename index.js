/*=============================================================
❓  Print the sum of the array's elements as a single integer.
*/
// 📢 expected output: 40
var arr = [4, 3, 5, 6, 8, 9, 5];
var simpleArrSum = function (arr) {
    var num = 0;
    arr.map(function (val) { return (num += val); });
    console.log(num);
};
simpleArrSum(arr);
/*===============================================================
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
console.log(compareTriplets(a, b));
/*===============================================================
❓   Min Max Sum
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements */
// 📢 expected output: 16 24
var arr1 = [1, 3, 5, 7, 9];
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
    console.log(minTotal + " " + maxTotal);
};
minMax(arr1);
/*===============================================================
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
console.log(birthdayCakeCandles(candles));
