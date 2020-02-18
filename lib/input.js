'use strict';

const minimist = require('minimist');

const rules = {
  action: {required: true},
  payload: {required: true}
};

function Input() {
  const args = minimist(process.argv.slice(2));
  console.log(args);
  
  if (args.a !== undefined || args.add !== undefined){
    this.action = 'add';
    this.payload = args.a || args.add;
  }
}

Input.prototype.valid = function () {
  // Valid if we have the most important things.
  // How can we also determine their type?

  // .each() returns a boolean based on every entry returning true within the callback
  return Object.keys(rules).every((option) => {
    // returns true if the option is required and it exists --OR-- true (default) if it's not required
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;