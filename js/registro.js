let formRegistro=document.querySelector("#formRegistro"),
nombreReg=document.querySelector("#nombreReg"),
apellidoReg=document.querySelector("#apellidoReg"),
userReg= document.querySelector("#userReg"),
passReg=document.querySelector("#passReg"),
matricula=document.querySelector("#matricula"),
avisosRegistro=document.querySelector("#avisosRegistro");

//Inicializar variable según contenido
const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Constructor de usuario
class Usuario {
    constructor(nombre,apellido,usuario,pass,matricula) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.pass=pass;
        this.matricula=matricula;
    }
}

//Guardar usuarios en LS
function guardarStorage(lista) {
    localStorage.setItem("usuarios",JSON.stringify(lista))
}

//Evento al registrar
formRegistro.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let newUser=new Usuario(nombreReg.value, apellidoReg.value, userReg.value, passReg.value, matricula.value);
    let errores = "";
    let entrar = true;
    avisosRegistro.innerHTML="";

    if (userReg.value != userReg.value.split(" ").join("")) {
        errores += `Nombre de usuario no debe tener espacios en blanco <br>`;
        entrar = false;
    }
    if (passReg.value.length < 6) {
        errores += `La contraseña es corta. Mínimo 6 caracteres <br>`;
        entrar = false;
    }
    if (nombreReg.value.length==0 || apellidoReg.value.length==0 || userReg.value.length==0 || passReg.value.length==0 || matricula.value.length==0) {
        errores += `Uno o más campos están vacíos <br>`;
        entrar = false;
    }
    if (entrar) {
        listaUsuarios.push(newUser);
        guardarStorage(listaUsuarios);
        avisosRegistro.style.color="green";
        avisosRegistro.innerHTML="Ha sido registrado correctamente";
    } else {
        avisosRegistro.style.color="red";
        avisosRegistro.innerHTML= errores;
    }
})
