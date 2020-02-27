'use strict';

// let fs = require('fs');

const mongoose = require('mongoose');
const Note = require('./models/note-schema');

const MONGOOSE_URI = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

function Notes () {
  
}

Notes.prototype.execute = function (option) {
  switch (option.action) {
    case 'add': 
      addNote(option.payload);
      break;
    case 'list':
      listAllNotes();
      break;
    case 'delete':
      deleteNote(option.payload);
  }
};

 async function addNote (payload) {
  let note = new Note({
    text: payload
  });
  await note.save();
  console.log("note added" + note);
  mongoose.disconnect();
};

async function listAllNotes() {
  await Note.find((err, list) => {
    if (err) throw err;
    list.forEach((note) => console.log(`id: ${note._id}, text: ${note.text}`));
  });
  mongoose.disconnect();
}

async function deleteNote(id) {
  await Note.findByIdAndDelete(id);
  mongoose.disconnect();
}


module.exports = Notes;
