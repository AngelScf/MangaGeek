import { productService } from "../service/product-service.js";

const toolBtn = document.querySelector("[data-tool-section]");
const addBtn = document.querySelector("[data-tool-add]");
const editBtn = document.querySelector("[data-tool-edit]");

/* Admin user validation */
let esAdmin = true; // The idea is sending something here to detect that an admin user as signed up

if(!esAdmin){
    toolBtn.classList.remove("botones")
    toolBtn.classList.add("botones-none");
}
else{
    if(!toolBtn.classList.contains("botones")){
        toolBtn.classList.add(botones);
    }
}

/*Creating manga card*/

const crearManga = (img, nombre, volumen, precio, id) =>{

    const row = document.createElement("div");
    row.classList.add("productos__card")
    const contenido = `
    <div class="imagen__repuesto producto__img"></div>
    <h3 class="producto__nombre"> ${nombre}</h3>
    <p class="producto__volumen">${volumen}</p>
    <p class="producto__precio">${precio}</p>
    <a href="#" class="producto__link">Ver producto </a>
    <button class= "boton boton__eliminar" data-tool-delete id="${id}">Eliminar</button>`;

    //    <button class="boton botones__editar" data-tool-edit id="${id}"> Editar producto </button>
    //    <img src="#" alt="Portada tomo-${volumen} ${nombre}" class="producto__img"> I've to check how to put an image here

    row.innerHTML = contenido;

    /*Detele product */
    const deleteBtn = row.querySelector("button");
    deleteBtn.addEventListener("click", () =>{
    const id = deleteBtn.id;
    productService.eliminarProducto(id).then((respuesta) => {
        console.log(respuesta);
    })
    .catch((err) => alert("Algo salio mal"));
})

    return row
}

addBtn.addEventListener("click", () => {
    window.location.href = "addProduct.html";
})

/*Show available products*/

const section  = document.querySelector("[data-section-general]");

productService.listaProductos().then((data)=>{
    data.forEach(({img, nombre, volumen, precio, id}) => {
        const nuevoManga = crearManga(img, nombre, volumen, precio, id);
        section.appendChild(nuevoManga);
    });
})
.catch((error) => alert("Ocurrio un error"));