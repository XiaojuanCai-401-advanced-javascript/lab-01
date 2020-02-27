#!/usr/bin/env node
'use strict';

const Validator = require('./lib/validator.js');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');


const rules = {
  action: {required: true},
  payload: {required: true}
};

const validator = new Validator(rules);
const input = new Input();
const notes = new Notes();
validator.valid(input) ? notes.execute(input) : help();

function help() {
  console.log(`

  api USAGE: api -a '<payload>'
             api -d '<id>'

   -a - add a note with content '<payload>'
   --add - long version of  -a
   -d - delete a note with id === '<id>'
   --delete - long version of -d

  `);

  process.exit();
}
