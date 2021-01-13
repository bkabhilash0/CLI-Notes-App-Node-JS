const notes = require('./notes');
const yargs = require('yargs');

// Create Add Command
yargs.command({
    command: 'add',
    describe: "Add a new Note",
    builder:{
        title:{
            describe: "Notes Title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Notes Content or Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) =>{
        notes.addNotes(argv.title, argv.body);
    }
});

// Create remove Command
yargs.command({
    command:'remove',
    describe: "Remove a Note",
    builder:{
        title:{
            describe:"Title of the Note to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv)=>(notes.removeNotes(argv.title))
});

// Create command for list and read
yargs.command({
    command:'list',
    describe: "List all the Notes!",
    handler: ()=>(notes.listNotes())
});

yargs.command({
    command:'read',
    describe: "Read a Note",
    builder:{
        title:{
            describe:"Title of the Note to be read",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv)=>(notes.readNotes(argv.title))
});

// console.log(yargs.argv)
yargs.parse();
