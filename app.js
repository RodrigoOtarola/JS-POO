//Clase producto y sus atributos
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

//Class  UI para interactuar con el html, metodos de la aplicación como listar, agregar o eliminar
class UI {
    //Agregar producto
    addProduct(product) {
        //llama al id producto-list
        const productList = document.getElementById('product-list');

        //Crea nuevo div
        const element = document.createElement('div');

        element.innerHTML += `
            <div class="card tex-center mb-4">
            <div class="card-body">
            <strong>Producto</strong>: ${product.name}
            <strong>Precio</strong>: ${product.price}
            <strong>Año</strong>: ${product.year}
            <a href="#" class="btn btn-danger" name="delete" id="delete">Delete</a>
            </div>            
            </div>
        `;
        //Para agregar elemento
        productList.appendChild(element);

        //Después de agregar, resetea el formulario.
        this.resetForm();
    }

    //Para resetear datos del formulario.
    resetForm(){
        document.getElementById('product-form').reset();
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
    ui.addProduct(product);

    //Para detener evento de que se refresque la pantalla al enviar
    e.preventDefault();
})

//Capturar boton delete
document.getElementById('product-list').addEventListener('click',(e)=>{
    console.log(e.target);
})