const fs = require('fs')

const addNote = (title, body) => {
    const loadedNotes = loadNotes();
    console.log('First12' + loadedNotes)

    loadedNotes.push({
        title: title,
        body: body
    })
    saveNotes(loadedNotes)

    console.log('LAST' + loadedNotes)
}


const removeNote = (title) => {
    var loadedNotes = loadNotes();
    console.log(loadedNotes);

    const resultArray = loadedNotes.filter( (note) => {
       return note.title !== title;
    })
    saveNotes(resultArray)
}

const list = () => {
    var loadedNotes = loadNotes();
    loadedNotes.forEach( note => {
        console.log(note.title + "\n");
    });
}

const loadNotes = () => {
    try{
        const loadedNotes = JSON.parse( fs.readFileSync('notes.json').toString() );
        return loadedNotes;
    } catch(e){
        return [];
    }
    
}

const saveNotes = ( noteData ) => {
    const jsonData = JSON.stringify(noteData)
    fs.writeFileSync('notes.json', jsonData)
}


const getNotes = (parameter1, parameter2) =>{

    return parameter1 + parameter2;
}

module.exports =  {
    addNote: addNote,
    removeNote: removeNote,
    list:list
};