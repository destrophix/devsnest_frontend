// let num: (string | number)[];
// num = [12,3,4];
// num.push("amit");
// console.log(num);

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(add(23, 2));

// interface objType {
//   name: string;
//   age: number;
//   address?: string;
// }

// let obj: objType;
// obj = {
//   name: "amit",
//   age: 23,
// };

// // obj.age = "23";
// obj.address = "Ballarpur";
// console.log(obj);

// // type themeType = string | number;
// type themeType = "dark" | "light";

// let theme: themeType;
// theme = "dark";

// console.log(theme);

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getData() {
    console.log("name : " + this.name + " age : " + this.age);
  }
}

let p = new Person("amit", 20);
p.getData();

export {};
