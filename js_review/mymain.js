// import my, {myfunc, myinfunc} from "./mymodule.js"
import * as myModule from "./mymodule.js"

const msg = "hihi";
// myfunc(msg + 1);
// myinfunc(msg + 2);
// my(msg);

myModule.myfunc(msg + 1);
myModule.myinfunc(msg + 2);
myModule.default(msg);