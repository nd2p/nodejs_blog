const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path')


//http logger
app.use(morgan('combined'))

//template engine
app.engine('handlebars', handlebars.engine({extname: '.hbs'}));
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})