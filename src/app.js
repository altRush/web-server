const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Rush WP'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Rush WP'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is useful helptext.',
    title: 'Help',
    name: 'Rush WP'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forcast: '31 degress',
    location: 'Bangkok'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Page not found',
    name: 'Rush WP',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found',
    name: 'Rush WP',
    errorMessage: 'Page not found.'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
