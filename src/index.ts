import express from 'express'
import './data'
import { addOneBook, getAllBooks, getOneBook, getbookratings} from './data'

const app = express()
const port = 8000

app.use(express.static('public'))

// Getting all books, with search
app.get('/api/books', (req,res) => {
    const search:string = ( req.query.search || "" ) as string
    getAllBooks(search, (data) => { res.send(JSON.stringify(data)) })
})

// Getting one book
app.get('/api/books/:id', (req,res) => {
    const bookId = parseInt(req.params.id,10)
    getOneBook(bookId, (book) => {
        if (book != null) res.send(JSON.stringify(book))
        else {
            res.status(404)
            res.send()
        }
    })
})

// Getting ratings
app.get('/api/books/stats', (req,res) => {
    console.log('retrieving ratings data')
    getbookratings( (data) => {res.send(JSON.stringify(data))})

})


// Adding one book
app.post('/api/books', (req,res) => {
    console.log('New Books Being added')
    let body = ""
    req
    .on('data', (data) => body += data)
    .on('end', () => { addOneBook(JSON.parse(body))
    res.status(200)
    res.send()
    })

})

// Add 400 if not succesful, or not all fiedls filled

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );