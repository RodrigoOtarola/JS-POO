//Clase producto y sus atributos
class Product {
    contructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Class  UI para interactuar con el html, metodos de la aplicación como listar, agregar o eliminar
class UI {
    //Agregar producto
    addProduct(producto) {
        //llama al id producto-list
        const productList = document.getElementById('product-list');

        //Crea nuevo div
        const element = document.createElement('div');

        element.innerHTML += `
            <div class="card tex-center mb-4">
            <div class="card-body">
            <strong>Producto</strong>: ${producto.name}
            <strong>Precio</strong>: ${producto.price}
            <strong>Año</strong>: ${producto.year}
            </div>            
            </div>
        `
        productList.appendChild(element);
    }

    //Eliminar producto
    deleteProduct() {

    }

    //Listar productos
    showMessage() {

    }
}

//Eventos del DOM

//Captura de btn submit
document.getElementById('product-form').addEventListener('submit', function (e) {
    //Capturamos los valores del form.
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //crear objeto producto
    const product = new Product(name, price, year);
    console.log(product);

    //Crea instancia ui para acceder a metodo agregar producto
    const ui = new UI();
    ui.addProduct(Product);

    //Para detener evento de que se refresque la pantalla al enviar
    e.preventDefault();
})