#!/usr/bin/env node
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
const notes = new Notes();
options.valid() ? notes.execute(options) : help();

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
