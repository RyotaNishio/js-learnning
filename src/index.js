// var val1 = 'var変数';
// console.log(val1)

// val1 = "var変数上書き"
// console.log(val1)

// var val1 = "var変数再宣言"
// console.log(val1)

// let val2 = "let変数";
// console.log(val2)

// val2 = "let変数上書き";
// console.log(val2)

// // let val2 = "let再宣言";
// const val3 = "const変数";

// val3 = "const上書き";
// const val4 = {
//   name: "sena",
//   age: 22
// }
// val4.adress = "Kanagawa";
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "sena";
//  const age = 22;

//  const message = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message);

// const func1 = (str) => str.toUpperCase;

// console.log(func1('function'));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

// const myProfile = {
//   name: 'sena',
//   age: '22'
// };

// const { name, age } = myProfile;
// const message = `名前は${name}です。年齢は${age}です。`;

// const myProfile = ['sena', 22]

// const [name, age] = myProfile
// const message = `名前は${name}です。年齢は${age}です。`;
// console.log(message)

// const seyHello = (name = "sena") => console.log(`こんにちは！${name}さん！`)

// seyHello('T')

// const array1 = [1, 2]
// console.log(...array1)

// const sumfunc = (num1, num2) => console.log(num1 + num2)
// sumfunc(...array1)

// const array2 = [1, 2, 3, 4, 5]
// const [num1, num2, ...array3] = array2
// console.log(...array3)

// const array4 = [10, 20];
// const array5 = [30, 40];

// const array6 = [...array4, ...array5];
// console.log(array6);

// const nameArray = ["sena", "el", "dd"]
// // nameArray.map((name, index) => console.log(`${index+1}番目は${name}です。`));

// // const numArray = [1, 2, 3, 4, 5]
// // const newArray = numArray.filter((num) => {
// //   return num % 2 === 1;
// // })

// // console.log(newArray);

// const newNameArray = nameArray.map((name) => {
//   if (name === 'sena') {
//     return name
//   } else {
//     return name + 'さん'
//   }
// });

// console.log(newNameArray);

// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);
// const num = 1300;
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲ないです';
// }
// console.log(checkSum(50, 40));
