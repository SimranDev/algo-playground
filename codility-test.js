console.log("Test");

function sumNum(N) {
  let arr = [];
  if (N % 2 !== 0) {
    arr.push(0);
  }
  if (N === 1) {
    return [0];
  }

  for (let i = 1; i <= N / 2; i++) {
    arr.push(i, i * -1);
  }
  return arr;
}

console.log(sumNum(10));
