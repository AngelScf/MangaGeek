import { productService } from "../service/product-service.js";

const formProducto = document.querySelector("[data-form-producto]");

formProducto.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-form-nombre]").value;
    const img = document.querySelector("[data-form-imagen]").value;
    const volumen = document.querySelector("[data-form-volumen]").value;
    const precio = document.querySelector("[data-form-precio]").value;

    productService.añadirProducto(img, nombre, volumen, precio).then(() => {
        alert("Producto guardado con exito");
    })
    .catch((err) => console.log(err));


})