// Type number
var price;
price = 123456;
// Decimal number
var priceDecimal;
priceDecimal = 12221.15232;
// Binary number
var bin = 10;
bin = 169;
var anotherBin = 34;
// Hexadecimal number
var hexadecimal = 0XA;
// Type string
var newStr = "Hello world !";
var newNameStr = "Hello world ! My name is Minh An";
// Type boolean
var isChecked = true;
var isCheck;
// Type object 
var user = {
    name: " Minh An",
    age: 21,
    sex: true
};
console.log(user.sex);
var i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);
var j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}
var index = -1;
while (index < 9) {
    index = index + 1;
    if (index % 2 == 0)
        continue;
    if (1)
        console.log("cc");
    console.log(index);
}
