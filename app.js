//packages and define server express
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateDryTalk = require('./generate_drytalk')
const app = express()
const port = 3000

//static public
app.use(express.static('public'))

//setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const dryTalk = generateDryTalk(options)
  res.render('index', { dryTalk, options })
})


//starts the express server and listening
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})