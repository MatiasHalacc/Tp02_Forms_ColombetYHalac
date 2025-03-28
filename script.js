let nombre = document.getElementById("nombre")
let labelNombre = document.getElementById("labelNombre")
let email = document.getElementById("email")
let labelEmail = document.getElementById("labelEmail")
let verificarEmail = false
let contrasena = document.getElementById("contrasena")
let labelcontrasena = document.getElementById("labelContrasena")
let confcontrasena = document.getElementById("confcontrasena")

nombre.addEventListener("input", () => {
    console.log(nombre.value.length)
    if(nombre.value.length < 3)
    { 
        labelNombre.classList.remove('hidden');
        labelNombre.classList.add('visible');
    } else {
        labelNombre.classList.add('hidden');
        labelNombre.classList.remove('visible');
    }
})

const validar = () => {
    confcontrasena = document.getElementById("confcontrasena").value;
    contrasena = document.getElementById("contrasena").value;

    if(confcontrasena != contrasena){
        labelcontrasena.classList.add('visible');
        labelcontrasena.classList.remove('hidden');
    } else{
        labelcontrasena.classList.add('hidden');
        labelcontrasena.classList.remove('visible');
    }
    return valido
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

email.addEventListener("input", () => { 
    let mail = validarEmail(email.value)
    console.log(mail)
    if(mail == false)
    { 
        labelEmail.classList.add('visible');
        labelEmail.classList.remove('hidden');
    } else {
        labelEmail.classList.add('hidden');
        labelEmail.classList.remove('visible');
    }

})

function mostrarContrasena(id, iconoId) {
    let input = document.getElementById(id);
    let icono = document.getElementById(iconoId);

    if (input.type === "password") {
        input.type = "text";
        icono.classList.remove("fa-eye-slash");
        icono.classList.add("fa-eye");
    } else {
        input.type = "password";
        icono.classList.remove("fa-eye");
        icono.classList.add("fa-eye-slash");
    }
}