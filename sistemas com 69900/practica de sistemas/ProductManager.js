class ProductManager {
    constructor() {
        this.products = [];
        this.newID = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const productExist = this.products.find(product => product.code === code);
        if (productExist) {
            console.log("Desea agregar otro producto igual?");
            return;
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos del producto ${title} son obligatorios`);
            return;
        }

        const product = {
            id: this.newID++,
            category:"",
            status: true,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);
        console.log(`El producto ${product.title} fue agregado exitosamente`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log(`El producto con ID ${id} no existe`);
        }
        return product;
    }
}

const productManager = new ProductManager();
productManager.addProduct("cafe", "cafe Colombiano", 2000, "cafe.jpg", "Ccol", 10);
console.log(productManager.getProductById(3)); // Aquí se muestra el mensaje de que el producto 3 no existe

