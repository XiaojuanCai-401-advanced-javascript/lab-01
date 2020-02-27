'use strict';

function Validator (rules) {
  this.rules = rules;
}

Validator.prototype.valid  = function (input) {
  // Valid if we have the most important things.
  // How can we also determine their type?

  // .each() returns a boolean based on every entry returning true within the callback
  return Object.keys(this.rules).every((option) => {
    // returns true if the option is required and it exists --OR-- true (default) if it's not required
    return this.rules[option].required ? !!input[option] : true;
  });
}

module.exports = Validator;
