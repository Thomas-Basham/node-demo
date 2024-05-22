const _ = require("lodash");

function toUpperCase(string) {
  return _.upperCase(string); //foo bar => 'FOO BAR'
}

function repeatString(string, amount){
  return _.repeat(string, amount);// '*' => '*************'
}

module.exports = {toUpperCase, repeatString}