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
    deleteProduct(element) {

        //Validación para eliminar producto
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado exitosamente','warning');
        }
    }

    //Para consultar si agrega o elimina elementos dentro de la interfaz.
    showMessage(message, cssClass) {

        //crear div
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        //Mostrar mensaje en html
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');

        //Texto a mostrar, antes del elemento container
        container.insertBefore(div, app);
        //Temporizador para sacar elemento del html. 1er parametro function a realizar y 2do el temporizador en milisegundos.
        setTimeout(()=>{
            //Elemento a remover
            document.querySelector('.alert').remove();
        },2000)
    }
}

//Eventos del DOM

//Captura de btn submit
document.getElementById('product-form').addEventListener('submit', (e)=> {
    //Capturamos los valores del form.
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    //crear objeto producto
    const product = new Product(name, price, year);
    //console.log(product);

    //Crea instancia ui para acceder a metodo agregar producto
    const ui = new UI();

    //Alertas por si faltan campos a llenar.
    if(name ==='' || price === '' || year ===''){
        return ui.showMessage('Completar formulario','danger');
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.showMessage('Producto agregado satisfactoriamente','success');

    //Para detener evento de que se refresque la pantalla al enviar
    e.preventDefault();
})

//Capturar boton delete
document.getElementById('product-list').addEventListener('click',(e)=>{
    const ui = new UI();
    ui.deleteProduct(e.target);
})