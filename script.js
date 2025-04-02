let verificarEmail = false
let contrasena = document.getElementById("contrasena")
let labelcontrasena = document.getElementById("labelContrasena")
let confcontrasena = document.getElementById("confcontrasena")

const validarNombre = ()=> {
    let nombre = document.getElementById("nombre")
    let labelNombre = document.getElementById("labelNombre")
    let valido = false
    if(nombre.value.length < 3)
    { 
        labelNombre.classList.remove('hidden');
        labelNombre.classList.add('visible');
        labelNombre.innerText = "El nombre debe tener al menos 3 caracteres"
        valido = false
    } else if (nombre.value.length > 3 || nombre.value.length == 0){
        labelNombre.classList.add('hidden');
        labelNombre.classList.remove('visible');
        labelNombre.innerText = ""
        valido = true
    }
    return valido
}   

const validar = () => {
    confcontrasena = document.getElementById("confcontrasena").value;
    contrasena = document.getElementById("contrasena").value;
    let valido = false  
    if(!esContrasenaValida(contrasena,confcontrasena)){  
        labelcontrasena.classList.add('visible');
        labelcontrasena.classList.remove('hidden');
        labelcontrasena.innerText = "Las contraseñas no coinciden o no son validas"
        valido = false
    } else{
        labelcontrasena.classList.add('hidden');
        labelcontrasena.classList.remove('visible');
        labelcontrasena.innerText = ""
        valido = true
    }
    return valido
}
function esContrasenaValida(contrasena, confContrasena) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
    return contrasena === confContrasena && regex.test(contrasena);
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

const validarEmailInput = () => { 
    let email = document.getElementById("email")
    let labelEmail = document.getElementById("labelEmail")
    let mail = validarEmail(email.value)
    let valido = false
    if(mail == false)
    { 
        labelEmail.classList.add('visible');
        labelEmail.classList.remove('hidden');
        labelEmail.innerText = "El email no es valido"
        valido = false
    } else {
        labelEmail.classList.add('hidden');
        labelEmail.classList.remove('visible');
        labelEmail.innerText = ""
        valido = true
    }
    return valido
}

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

document.querySelector(".boton-cambio").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".login-container").classList.toggle("login-container-black");
    document.querySelector(".submit-button").classList.toggle("submit-button-black")
    if (document.body.classList.contains("dark-mode")) {
        document.querySelector(".boton-cambio").innerText = "Modo claro";
    } else {
        document.querySelector(".boton-cambio").innerText = "Modo oscuro";
    }
})

document.getElementById("submit-btn").addEventListener("click", () => {
    if (!(validar() && validarEmailInput() && validarNombre())) {
        alert("Los campos son inválidos");
    }else{
        alert("los campos son validos")
    }
})