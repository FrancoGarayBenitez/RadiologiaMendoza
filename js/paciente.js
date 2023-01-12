const presentacion=document.querySelector("#bienvenida"),
formPaciente=document.querySelector("#formPaciente"),
nombrePaciente=document.querySelector("#nombrePaciente"),
apellidoPaciente=document.querySelector("#apellidoPaciente"),
dniPaciente=document.querySelector("#dniPaciente"),
btnSolicitar=document.querySelector("#btnSolicitar"),
avisosPaciente=document.querySelector("#avisosPaciente");



//Función para recuperar datos de SS
function recuperarSS() {
    let datos=sessionStorage.getItem("usuarioActivo");
    return datos;
}

const usuarioSS= recuperarSS();

//Presentación doctor
presentacion.innerHTML= "Hola Doctor/a "+usuarioSS;

//Inicializar array vacío para agregar datos del paciente
const listaPacientes= [];

//Evento al botón solicitar radiografías
formPaciente.addEventListener("submit", (e)=> {
    e.preventDefault();

    if (nombrePaciente.value == "" || apellidoPaciente.value=="" || dniPaciente.value=="") {
        avisosPaciente.style.color="red";
        avisosPaciente.innerText="Uno o más campos están vacíos"
    } else {
        listaPacientes.push(
            {nombre:nombrePaciente.value, apellido:apellidoPaciente.value, dni:dniPaciente.value }
        )
        sessionStorage.setItem("pacienteActivo",JSON.stringify(listaPacientes));
    
        window.location.href="../index.html";
    }
})


