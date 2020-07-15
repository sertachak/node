//usage of nodemon can be helpful
//nodemon usage -> type 'nodemon <file name>' it only watch changes in that file. If wanted to catch catch other file changes type 'nomdemon <filename> -e(e for extensions) js, hbs'  -> catches changes in js and hbs files

const path = require('path');
const express = require('express'); 
const hbs = require('hbs');
const forecast = require('../../weather/utils/forecast');
const geoCode = require('../../weather/utils/geocode');

const app = express();

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs'); // only looks default path views to change that set views
app.set('views', viewsPath); 
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title:'asd'
    })
})

app.get('/index', (req, res) => {
    res.render('index', {
        title:'asd'
    })
})


app.get('/history', (req, res) => {
    res.render('history', {
        title:'History of town'
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error:'You must provide search'
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/about', (req,res) => {
    res.send('About page should be under this route');
})

app.get('/weather', (req,res) => {
    if(!req.query.search){
        return res.send({
            error:'Search option not provided for weather forcasting'
        })
    }

    geoCode(req.query.search, (error, { latitude, longitude }) => {
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log( forecastData );
            res.send({
                address: req.query.search,
                forecast: forecastData
            })
        })
    })
})

app.get('*',(req,res) => {
    res.render('404', {
        title:'404 cannot find directed page'
    })
})


app.listen('8080', () =>{
    console.log('Server is up and running');
}) 