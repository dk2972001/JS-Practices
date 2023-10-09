/*const circle = {
  radius: 2,
  draw() {
    (a = 4), console.log(a);
  },
};
const circle2 = { ...circle };
console.log(circle2);*/

/*let a = [29, 30, 32, 36, 34];
const b = a;
console.log(b);

a.push(38, 40);
a.unshift(27);
a.pop();
console.log(a);*/

/*const a = [12, 24, 26, 28, 32, 36];
const b = [10, 11, 12, 23, 45, 68];
let d = "This is a string";
const e = d.split(" ");
console.log(e);
const f = e.split(" ");
console.log(f);*/

/*const a = [12, 24, 26, 28, 32, 36];
const b = a.some(function (value) {
  return value < 5;
});
console.log(b);*/

/*let a = [1, 4, 6, 8, 9, 10, 12, 14];
const b = a.filter(function (n) {
  return n >= 12;
});
a.map(function (n) {
  return { n: a };
  console.log(b);
});
console.log(b);*/

/*let val = [1, 2, 3, 4, 5];
let sum = 0;
for (sums in sum) {
  sums = sum + val;
  console.log(sums);
}
val.reduce((accumulator, CustomElement) => accumulator + CustomElement);
console.log(sum);*/

/*let b;
let a = function () {
  console.log("new function");
};
a();

let c = function d() {
  console.log("new function");
};
c();*/

//let a = [1, 4, 8, 9, 10];
/*function b(a, b, c) {
  console.log(arguments);
  return a + b - c;
}
console.log(b(1, 2, 5));*/

/*function a(...arguments) {
  console.log(arguments);
  return arguments.reduce(function (a, b) {
    return a + b;
  });
}
console.log(a(1, 2, 3, 4, 5));*/

/*function si(p, n, r) {
  return (p * n * r) / 100;
}
console.log(si(1000, 2, 5));*/

/*let happy = {
  first_name: "2",
  Last_name: "4",
  name() {
    return `${happy.first_name} ${happy.Last_name}`;
  },
  /**
   * @param {string} value
   */
/*set name(value) {
    if (typeof happy.Last_name !== "string") {
      throw new Error("Value is not a string");
    } else {
      let a = value.split(" ");
      happy.first_name = a[0];
      happy.Last_name = a[1];
    }
  },
};
console.log(happy);
console.log(`${happy.first_name} ${happy.Last_name}`);
console.log(Error);*/

/*let a = 9;
function start() {clear
  console.log("start");
  let a = 10;
  console.log(a);
}
function stop() {
  console.log("stop");
}
start();
stop();*/

function a() {
  for (let i = 0; i < 5; i++) {
    if (true) {
      var color = "blue";
    }
  }
  console.log(color);
  console.log(i);
  a();
}
