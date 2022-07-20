//declare const values and port 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/notes', (req, res) => {
console.log("lets bang this out!")
});



app.get('/api/notes', (req, res) => {
    res.send('hello there')
});



app.post('/api/notes', (req, res) => {
});



app.delete('/api/notes/:id', (req, res) => {

});



app.get('*', (req, res) => {
    res.send('hi');
});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});