const express = require("express")
const book_router = require("./routes/book.js")
const student_router = require("./routes/student.js")
const rental_router = require("./routes/rental.js")
const app = express()
const port = 8000

console.log("GERENCIAMENTO INICIADO")

app.use(express.json())
// app.use(cep_endereco) // Middleware de uso global

app.use("/rental", rental_router)
app.use("/student", student_router)
app.use("/book", book_router)



app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})