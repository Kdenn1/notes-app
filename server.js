//declare const values and port 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//link the get request to the notes html document
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './miniature-eureka-main/develop/public/notes.html'));
});

//api notes get and post requests
app.get('/api/notes', (req, res) => {
    res.send('hello there')
    res.json(allNotes.slice(1));
});

app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    //tell the server what to do with json data returned 
    res.json(newNote);
});

//delete notes 
app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});



app.get('*', (req, res) => {
    res.send('hi');
    res.sendFile(path.join(__dirname, './miniature-eureka-main/develop/public/index.html'))
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});