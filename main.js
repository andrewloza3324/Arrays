//let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let b = a[1] + a[4] + a[7] + a[9];

//console.log(b);

//let a = [1, 2, 3, 4, 5];

//a[0] = 10;

//a[1] = 20;

//a[2] = 30;

//a[3] = 40;

//a[4] = 50;

//console.log(a);

//let a = [10, 20];

//if (a[0] > a[1]) {
// console.log(10);
//} else {
//console.log(20);
//}

//let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let i = 0;

//for (i = 0; i < a.length; i++) {
//console.log(a[i]);
//}
//while (i <= 5) {
//console.log(a[i]);
//}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < a.length; i++) {
  if (a[i] <= 5) {
    console.log(a[i]);
  }
}

console.log("---");

let c = [1, 2, 14, 4, 5, 6, 7, 8, 9, 10];

for (let b = 0; b <= c.length; b++) {
  if (c[b] > 5 && c[b] < 8) {
    console.log(c[b]);
  }
}
