const express = require('express') ;
const nunjucks = require('nunjucks')
const app = express()
const routes = require('./routes')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)

// sets view engine to nunjucs
app.set('view engine', 'njk')

nunjucks.configure('./src/app/views', {
    express: app,
    autoescape: false,
    noCache: true
})

app.listen(8080, () => {
    console.log('Server Running on 8080')
})