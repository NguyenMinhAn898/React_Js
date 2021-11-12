// Type number
let price: number;
price = 123456;

// Decimal number
let priceDecimal: number;
priceDecimal = 12221.15232;

// Binary number
let bin = 0b01010;
bin = 0b10101001;

let anotherBin: number = 0b100010;

// Hexadecimal number
let hexadecimal: number = 0xa;

// Type string
let newStr = "Hello world !";
let newNameStr: string = "Hello world ! My name is Minh An";

// Type boolean
// 0 false ; 1 true
let isChecked = true;
let isCheck: boolean;

// Type object
let user = {
  name: " Minh An",
  age: 21,
  sex: true,
};
console.log(user.sex);

let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

let index = -1;

while (index < 9) {
  index = index + 1;

  if (index % 2 == 0) continue;
  if (1) console.log("cc");

  console.log(index);
}
