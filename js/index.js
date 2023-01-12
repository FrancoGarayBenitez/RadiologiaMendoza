const formInicioSesion=document.querySelector("#formInicioSesion"),
userInicioSesion=document.querySelector("#userInicioSesion"),
passInicioSesion=document.querySelector("#passInicioSesion"),
avisosInicioSesion=document.querySelector("#avisosInicioSesion");


//Iniciar sesión
function inicioSesion(usuarios) {
    let acceso=false;

    for (let i=0; i<usuarios.length; i++) {
        if (userInicioSesion.value==usuarios[i].usuario && passInicioSesion.value==usuarios[i].pass) {
            acceso = true;
            sessionStorage.setItem("usuarioActivo", usuarios[i].nombre+" "+usuarios[i].apellido+`<br> Matrícula número: `+ usuarios[i].matricula);
        }
    }

    if (acceso) {
        window.location.href="../paciente.html";
    } else if (usuarios.length === 0) {
        avisosInicioSesion.style.color="red";
        avisosInicioSesion.innerHTML="Usuario no encontrado";
    } else {
        avisosInicioSesion.style.color="red";
        avisosInicioSesion.innerHTML="Usuario no encontrado";
    }
}



//Evento al iniciar sesión
formInicioSesion.addEventListener("submit", (e)=>{
    e.preventDefault();

    inicioSesion(JSON.parse(localStorage.getItem("usuarios")));
})