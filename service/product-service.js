const listaProductos = () => 
fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const añadirProducto = (img, nombre, volumen, precio) =>{
    return fetch("http://localhost:3000/producto",{
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({img, nombre, volumen, precio, id: uuid.v4() }),
    });
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE",
    });
};

export const productService = {
    listaProductos,
    añadirProducto,
    eliminarProducto
}