const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const email = document.querySelector("[data-form-email]");
    const password = document.querySelector("[data-form-password]");

    if(validarUsuario(email,password)){
        alert("Sesion exitosa");
        window.location.href = "directorio.html";
    }
    else{
        alert("Algo no salio bien..")
    }

})

const validarUsuario = (email, password) => {
    if(email.value == "admin@gmail.com" && password.value == "1234"){
        return true
    }
    alert("Sesion invalida");
    return false
}

