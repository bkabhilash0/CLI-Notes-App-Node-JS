const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>{
    return "Your Notes...";
}

const addNotes = (title,body) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);
    if (!duplicateNotes.length){
        notes.push({title,body});
        console.log(notes);
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
    const required_note = notes.filter(note =>note.title === title);
    if (!required_note.length){
        console.log(chalk.bgRed(`No Note found with the title ${title} !`));
    }else{
        required_note.map(note =>{
            console.log(chalk.bgGreen(note.title),chalk.bgBlue(note.body));
        })
    }
};

module.exports = {getNotes,addNotes,removeNotes,listNotes,readNotes};