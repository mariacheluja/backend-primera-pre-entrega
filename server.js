import express from 'express';
import cartRouter from '../src/routes/api/cart.router.js';
import productsRouter from '../src/routes/api/products.router.js';
import morgan from 'morgan';
import { __dirname } from '../src/path.js';
import { errorHandler } from './middlewares/errorHandler.js';


const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/api/carts', cartRouter);
app.use('/api/products', productsRouter);

app.use(errorHandler);

const PORT = 8080

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})
