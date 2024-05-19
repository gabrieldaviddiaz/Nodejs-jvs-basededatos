import express from 'express'
import { pool } from './db.js'
import  librosroutes  from './routes/libros.routes.js';
import  indexroutes  from './routes/index.routes.js';
import clienteroutes from  './routes/cliente.routes.js';
import bibliotecarioroutes from  './routes/bibliotecario.routes.js'
import prestamoroutes from './routes/prestamo.routes.js'


const app = express()

app.use(express.json())

app.use(prestamoroutes)
app.use(bibliotecarioroutes)
app.use(clienteroutes)
app.use(indexroutes)
app.use(librosroutes)

app.listen(3000)
console.log("el servidor se esta ejecutando en el puerto 3000")


