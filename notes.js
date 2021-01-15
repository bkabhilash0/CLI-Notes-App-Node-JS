// Note: find returns only one element but filter returns a sequence

const fs = require('fs');
const chalk = require('chalk');


const addNotes = (title,body) =>{
    let notes = loadNotes();
    // const duplicateNotes = notes.filter(note => note.title === title); // filter method is kind off slow as it scans all the elements of the array while find stops when it finds the element.
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote){
        // notes.push({title,body});
        notes = [...notes,{title,body}];
        saveNotes(notes);
        console.log(chalk.bgGreen("Note added successfully!"));
    }else{
        console.log(chalk.bgRed("Note not added! Note with the same title Already Exists!"));
    }
    
};

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json",dataJSON);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync("./notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}

const removeNotes = (title) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note =>note.title !== title);
    if (notes.length != duplicateNotes.length){
        saveNotes(duplicateNotes);
        console.log(chalk.bgGreen("Note removed successfully!"));
    }else{
        console.log(chalk.bgRed('Note not removed ! No notes exists with the title',title));
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    notes.map(note =>{
        console.log(chalk.bgGreen(note.title),chalk.bgBlue(note.body));
    })
}

const readNotes = (title) =>{
    const notes = loadNotes();
    // const required_note = notes.filter(note =>note.title === title);
    const required_note = notes.find(note =>note.title === title);
    if (!required_note){
        console.log(chalk.bgRed(`No Note found with the title ${title} !`));
    }else{
        console.log(chalk.bgGreen(required_note.title),chalk.bgBlue(required_note.body));
    }
};

module.exports = {addNotes,removeNotes,listNotes,readNotes};