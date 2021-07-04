let x1 = 7;
let v1 = 3;
let x2 = 4;
let v2 = 2;

const compareKangaroos = (x1, v1, x2, v2) => {
  let n = 0;
  while (n < 10000) {
    console.log(x1 + n * v1, x2 + n * v2);
    if (x1 + n * v1 === x2 + n * v2) {
      return console.log("YES");
    }
    n++;
  }
  return console.log("NO");
};

compareKangaroos(x1, v1, x2, v2);
