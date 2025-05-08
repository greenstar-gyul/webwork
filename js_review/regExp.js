let text = "Visit W3Schools test";
const exp = /Visit/i;
// let n = text.search(exp);
// console.log(n);

// let result = exp.test(text);
// console.log(result);

let numExp = /[0-9]{3}$/;
let numText = `123412sadsf2a1322`;
console.log(numExp.test(numText));

let exp2 = /^[0-9]{6}-[0-9]{7}$/;
let text2 = `12345656-1234567`;
console.log(exp2.test(text2));

let exp3 = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let text3 = `abc@na.com`;
console.log(exp.test(text3));