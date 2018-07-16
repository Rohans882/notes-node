const fs = require('fs');
// const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const argv = yargs.argv;
var command = process.argv[2];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note === note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title taken");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command=== "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}

//If note exists then we know the note was created that means we can print a messagel
// ike note was created, note title, note body, print an error message like note title alrdy in use

// var filteredArray = _.uniq(["Rohan"]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString("Andrew"));

// console.log("Result:", notes.add(9, -2));

// var user = os.userInfo();

// var res = notes.addNote();
// console.log(res);


// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log("Unable to write file");
//   }
// });
