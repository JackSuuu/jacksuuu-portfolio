// Think of the require() as a python import command 
const express = require('express');
const path = require('path')

const app = express();

app.get('/api', (req, res) => {
    res.json(`HTTP GET request received`);
})

// run npm run build
app.use('/jackProfilo', express.static(path.join(__dirname, '/react-app/build')));

// The working directory where I launch the app
// For best practice we use the relative directory
app.use('/jackProfilo', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resouce not found</h1>`)
})

app.listen(3000, () => {
    console.log("App listening on port 3000");
})

console.log('HI')