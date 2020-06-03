//usage of nodemon can be helpful

const path = require('path');
const express = require('express'); 

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title:'asd'
    })
})

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req,res) => {
    res.send('About page should be under this route');
})

app.get('/weather', (req,res) => {
    res.send('Weather page will be moved under this route');
})

app.listen('3000', () =>{
    console.log('Server is up and running');
})