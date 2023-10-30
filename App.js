const api = require('./Store/ApiStore')
const database= require('./Database/config')
const app=api.app
database.connect()

// Api Routes

app.get('/books',api.getAllBooks)
app.get('/books/:id',api.getAllBooksbyId)
app.post('/books',api.createBook)
app.put('/books/:id',api.updateBook)
app.delete('/books/:id',api.deleteBook)

const Port= process.env.PORT ||3000;
app.listen(Port,()=>{
    console.log(`Server is Running on ${Port}`);
})