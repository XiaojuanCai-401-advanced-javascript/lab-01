'use strict';

let fs = require('fs');

function Notes () {
  console.log(__dirname);
  this.notes = JSON.parse(fs.readFileSync(__dirname+'/notes.json'));
  console.log(this.notes);
}

Notes.prototype.getNewId = function () {
  let maxId = 0;
  for (let note of this.notes) {
    if (note.id > maxId) maxId = note.id;
  }
  return maxId + 1;
};

Notes.prototype.execute = function (option) {
  if (option.action === 'add') this.add(option.payload);
};

Notes.prototype.add = function (payload) {
  let id = this.getNewId();
  this.notes.push({id: id, text: payload});
  fs.writeFile(__dirname+'/notes.json', JSON.stringify(this.notes), (err, data)=>
  {
    if (err) throw err;
    console.log('Note added.');
  });
};

module.exports = Notes;
