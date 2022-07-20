//declare const values and port 
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const allNotes = require('./db/db.json');
app.use(express.json());
app.use(express.static('public'));

//link the get request to the notes html document
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//api notes get and post requests
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, allNotes);
    //tell the server what to do with json data returned 
    res.json(newNote);
});

//delete notes 
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});


//get all request
app.get('*', (req, res) => {
    res.send('hi');
    res.sendFile(path.join(__dirname, './public/index.html'))
});

//function to create new note 
function createNote (body, notesArray) {
    const newNote = body;
    //if statement to tell server what to do with json 
    if(!Array.isArray(notesArray))
        notesArray = [];

    if (notesArray.length === null)
        notesArray.push(0);

    //start the note count at zero 
    body.id = notesArray[0];
    notesArray[0]++;
    body.id++;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});