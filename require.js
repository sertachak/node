const notesProperties = require( './utils')


const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')


console.log(validator.isURL('https://192.168.2.60'))


yargs.version('1.1.15')

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        noteTitle:{
            describe:'Title for note',
            demand: true,
            type: 'string'         
        },
        noteBody:{
            describe:'Body',
            demand:true,
            type:'string'
        }
    },
    handler: (argv) => {
        notesProperties.addNote( argv.noteTitle, argv.noteBody)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder:{
        noteTitle:{
        describe:'Title of the note gonna removed',
        demand: true,
        type: 'string',
        }
    },

    handler: (argv) => {
       notesProperties.removeNote(argv.noteTitle);
    }
})

yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler: () => {
        console.log('All notes are listed')
    }
})



yargs.parse();