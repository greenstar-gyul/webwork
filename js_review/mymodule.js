/* 캡슐화 */

function myfunc(msg) {
  console.log(msg);
}

function myinfunc(msg) {
  console.log(msg);
}

function defFunction(msg) {
  console.log('default: ' + msg);
}

export default defFunction;
export {myfunc, myinfunc};