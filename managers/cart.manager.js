// realizo las importaciones necesarias

import { __dirname } from "../path.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import ProductManager from "./product.manager.js";  // importo productManager para usar sus metodos para el carrito
const productManager = new ProductManager(`${__dirname}/db/products.json`); // lo guardo en una constante  y apunto a la db de producto


// llamo al carrito


export default class CartManager {
  constructor(path) {
    this.path = path;
  }


  // funcion para llamar a los carritos 


  async getAllCarts() {
    try {
      if (fs.existsSync(this.path)) {
        const carts = await fs.promises.readFile(this.path, "utf-8");
        const cartsJSON = JSON.parse(carts);
        return cartsJSON;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }


  // funcion para crear carritos y darles un id (post)
  async createCart() {
    try {
      const cart = {
        id: uuidv4(),
        products: [],  //array vacio cuando lo creamos
      }
      const carts = await this.getAllCarts();
      carts.push(cart);
      await fs.promises.writeFile(this.path, JSON.stringify(carts));
      return cart;
    } catch (error) {
      console.log(error);
    }
  }


  // funcion para consultar carritos por id

  async getCartById(id) {
    try {
      const carts = await this.getAllCarts();
      const cart = carts.find((c) => c.id === id);
      if (!cart) return null
      console.log('No se encontró ningún carrito con el ID proporcionado.');
      return cart
      console.log('Carrito encontrado:');
      ;
    } catch (error) {
      console.log(error);
    }
  }

  // funcion para agregar un producto al carrito

  
//  



// async saveProductToCart (idCart, idProduct) {
    
//       const cartExist = await this.getCartById(idCart);
//       if(!cartExist) throw new Error('Cart not found');
//       const existProdInCart = cartExist.products.find((prod) => prod.product === idProduct);
//       if(!existProdInCart){
//         const prod = {
//           product: idProduct,
//           quantity: 1
//         };
//       cartExist.products.push(prod);
//     } else existProdInCart.quantity += 1;
//     const updatedCarts = carts.map((cart) => {
//       if(cart.id === idCart) return cartExist
//       return cart
//     })
//     await fs.promises.writeFile(this.path, JSON.stringify(updatedCarts));
//     return cartExist
//   } catch(err) {
//     console.log(error);
//   }
// }

 
async saveProductToCart(idCart, idProduct) {
  try {
    const cartExist = await this.getCartById(idCart);
    if (!cartExist) throw new Error('Cart not found');
    const existProdInCart = cartExist.products.find((prod) => prod.product === idProduct);
    if (!existProdInCart) {
      const prod = {
        product: idProduct,
        quantity: 1
      };
      cartExist.products.push(prod);
    } else existProdInCart.quantity += 1;
    const carts = await this.getAllCarts(); // Obtener todos los carritos
    const updatedCarts = carts.map((cart) => {
      if (cart.id === idCart) return cartExist;
      return cart;
    });
    await fs.promises.writeFile(this.path, JSON.stringify(updatedCarts));
    return cartExist;
  } catch (err) {
    console.log(err);
  }
}
}
