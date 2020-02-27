'use strict';

const minimist = require('minimist');


const actions = {a : 'add', add : 'add', d : 'delete', delete : 'delete', l : 'list', list: 'list'};


function Input() {
  const args = minimist(process.argv.slice(2));
  let flag = Object.keys(actions).filter((flag) => args[flag] !== undefined)[0];
  this.action = actions[flag];
  this.payload = args[flag];
}

module.exports = Input;