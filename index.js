console.log("hello world");
const { toUpperCase, repeatString } = require("./modules/stringUtils");

console.log(
  toUpperCase("this is a lower case sentence that should be upper case")
);

console.log(repeatString("🥳", 1000));
