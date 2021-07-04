/*1.=============================================================
❓  Print the sum of the array's elements as a single integer.
*/
// 📢 expected output: 40
const arr: number[] = [4, 3, 5, 6, 8, 9, 5];

const simpleArrSum = (arr: number[]): void => {
  let num: number = 0;
  arr.map((val) => (num += val));
  console.log(`Simple Array Sum: ${num}`);
};
simpleArrSum(arr);

/*2.===============================================================
❓  A Very Big Sum 
Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements
*/
const arr1: number[] = [
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
];

const aVeryBigSum = (arr: number[]): number => {
  return arr.reduce((previousVal, currentVal) => previousVal + currentVal);
};
console.log(`A very Bigg Num: ${aVeryBigSum(arr1)}`);

/*3.===============================================================
❓  Compare the Triplets
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.*/
// 📢 expected output: [1,1]
let a: number[] = [9, 2, 3];
let b: number[] = [3, 2, 4];
const compareTriplets = (arrA: number[], arrB: number[]): number[] => {
  let aScores: number = 0;
  let bScrores: number = 0;
  for (let i in arrA) {
    if (arrA[i] > arrB[i]) {
      aScores++;
    } else if (arrA[i] < arrB[i]) {
      bScrores++;
    } else continue;
  }
  return [aScores, bScrores];
};
console.log(`Compare Triplets: ${compareTriplets(a, b)}`);

/*4.===============================================================
❓   Min Max Sum 
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements */
// 📢 expected output: 16 24
const arr2: number[] = [1, 3, 5, 7, 9];
const minMax = (arr: number[]): void => {
  let minTotal: number, maxTotal: number;
  minTotal = arr
    .sort()
    .filter((_, i) => i !== arr.length - 1)
    .reduce((a, b) => a + b);
  maxTotal = arr
    .sort()
    .filter((_, i) => i !== 0)
    .reduce((a, b) => a + b);

  console.log(`Min Max Sum: ${minTotal} ${maxTotal}`);
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
const candles: number[] = [4, 1, 4, 3, 4, 1, 2, 1];
function birthdayCakeCandles(candles: number[]): number {
  /* 🤔 for some reason the commented code failing in one test case */
  // let largestNumber: number = candles.sort()[candles.length - 1];
  // let countOfLargetNumber: number = candles.filter(
  //   (val) => val == largestNumber
  // ).length;
  // return countOfLargetNumber;

  let count: number = 0;
  let largestNum: number = 0;
  for (let i = 0; i < candles.length; i++) {
    let num = candles[i];
    if (num > largestNum) {
      largestNum = num;
      count = 1;
    } else if (largestNum == num) {
      count++;
    }
  }
  return count;
}
console.log(`Birthday Cake Candles: ${birthdayCakeCandles(candles)}`);

//6.===============================================================
/* 🌎  LINK: https://www.hackerrank.com/challenges/diagonal-difference/problem */
const arr2D: number[][] = [
  [8, 2, 3],
  [1, 7, 3],
  [3, 6, 1],
];

const diagonalDifference = (arr: number[][]) => {
  let diagonal1: number = 0;
  let diagonal2: number = 0;

  for (const i in arr) {
    diagonal1 += arr[i][i];
    diagonal2 += arr.reverse()[i][i];
  }
  return Math.abs(diagonal1 - diagonal2);
};

console.log(`Diagonal Difference ${diagonalDifference(arr2D)}`);

//7.===============================================================
/* 🌎  LINK: https://www.hackerrank.com/challenges/plus-minus/problem */
const arr3: number[] = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr: number[]): void => {
  let positiveNum: number = 0,
    negativeNum: number = 0,
    zeroNum: number = 0;

  for (const i in arr) {
    if (arr[i] > 0) {
      positiveNum++;
    } else if (arr[i] < 0) {
      negativeNum++;
    } else zeroNum++;
  }

  const length: number = arr.length;
  console.log(positiveNum / length, negativeNum / length, zeroNum / length);
};

plusMinus(arr3);

//8.===============================================================
// 🌎 https://www.hackerrank.com/challenges/staircase/problem
const staircase = (num: number): void => {
  for (let i = 0; i < num; i++) {
    console.log(" ".repeat(num - (i + 1)) + "#".repeat(i + 1));
  }
};
staircase(10);

//9.===============================================================
// 🌎 https://www.hackerrank.com/challenges/time-conversion/problem
const s: string = "12:09:45PM";
const timeConversion = (s: string): string => {
  let militaryTimeFormat = "";
  const slicedAMPN = s.slice(8, 10);
  const slicedHours = s.slice(0, 2);
  const convertedString = (parseInt(slicedHours) + 12).toString();

  if (slicedAMPN === "PM" && slicedHours !== "12") {
    militaryTimeFormat = s.replace(slicedHours, convertedString).slice(0, 8);
  } else if (slicedHours === "12" && slicedAMPN === "AM") {
    militaryTimeFormat = s.replace(slicedHours, "00").slice(0, 8);
  } else militaryTimeFormat = s.slice(0, 8);

  return militaryTimeFormat;
};

console.log(timeConversion(s));

//9.===============================================================
// 🌎 https://www.hackerrank.com/challenges/find-digits/problem?h_r=next-challenge&h_v=zen
let n: number = 101054;
const findDigits = (n: number): number => {
  let zeroRemainderCount = 0;
  let digitsArr = String(n).split("").map(Number);
  for (const i in digitsArr) {
    if (digitsArr[i] !== 0 && digitsArr[i] % digitsArr[i] === 0)
      zeroRemainderCount++;
  }

  return zeroRemainderCount;
};

console.log(findDigits(n));

//10.===============================================================
// 🌎 https://www.hackerrank.com/challenges/grading/problem
let grades: number[] = [4, 73, 67, 38, 33];

function gradingStudents(grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    return applyRound(grade);
  });

  function applyRound(grade: number): number {
    if (grade % 5 >= 3) {
      return grade + (5 - (grade % 5));
    } else {
      return grade;
    }
  }
}

console.log(`Grades Result: ${gradingStudents(grades)}`);
