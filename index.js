import express from 'express'
import  configDotenv  from 'dotenv'
import { Product } from './DataBase/models/product.model.js'
import { dbConnection } from './DataBase/dbConnection.js'
configDotenv.config()

const app = express()
const port = 3000
// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/Front', express.static('Front'))
app.use('/views', express.static('views'))

// Routes
app.get('/', async (req, res) => {
    let product = await Product.find(req.body)
    res.render('index.ejs', { product })
})

app.get('/updateProduct/:id', async (req, res) => {
    let product = await Product.findById(req.params.id)
    res.render('update.ejs', { product })
})

app.post('/handelUpdate/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/')
})

app.get('/deleteProduct/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

app.post('/addProduct', async (req, res) => {
    await Product.insertMany(req.body)
    res.redirect('/')
})

// Default route
app.get('/', (req, res) => res.send('Hello World!'))

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
