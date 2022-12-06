//Declaración Regiones
let macizoFacial="Macizo facial";
let orbitas="Órbitas";
let oidos="Oídos";
let craneoCompleto="Cráneo completo";
let cervical="Cervical";
let dorsal="Dorsal";
let lumbosacra="Lumbosacra";
let columnaCompleta="Columna completa";
let torax="Tórax";
let abdomen="Abdómen";
let hombro="Hombro";
let brazo="Brazo";
let codo="Codo";
let antebrazo="Antebrazo";
let manoMuneca="Mano y Muñeca";
let pelvis="Pelvis";
let femur="Fémur";
let rodilla="Rodilla";
let pierna="Pierna";
let pie="Pie";
let resumen="\n";



//Precios de los estudios según región
let macizoPrecio=2000;
let orbitasPrecio=2000;
let oidosPrecio=2000;
let craneoCompletoPrecio=5000;
let cervicalPrecio=2500;
let dorsalPrecio=3500;
let lumbosacraPrecio=3000;
let columnaCompletaPrecio=10000;
let toraxPrecio=5000;
let abdomenPrecio=5000;
let extremidadesPrecio=1000;
let precioTotal=0;


//Region cabeza
function regionCabeza() {
    let cabeza=prompt("1-Macizo Facial \n2-Órbitas \n3-Oídos \n4-Cráneo completo \n5-Volver")
    switch (cabeza) {
        case "1":
            alert("Macizo facial agregado a la lista");
            precioTotal = precioTotal + macizoPrecio;
            resumen = resumen + macizoFacial + "\n";
            break;
        case "2":
            alert("Órbitas agregado a la lista");
            precioTotal = precioTotal + orbitasPrecio;
            resumen = resumen + orbitas + "\n";
            break;
        case "3":
            alert("Oídos agregado a la lista");
            precioTotal = precioTotal + oidosPrecio;
            resumen = resumen + oidos + "\n";
            break;
        case "4":
            alert("Cráneo completo agregado a la lista");
            precioTotal = precioTotal + craneoCompletoPrecio;
            resumen = resumen + craneoCompleto + "\n";
            break;
        case "5":
            break;
        default:
            alert("Opción no válida");
            break;
    }
}


//Región Columna
function regionColumna() {
    let columna=prompt("1-Cervical \n2-Dorsal \n3-Lumbosacra \n4-Columna completa \n5-Volver");
    switch (columna) {
        case "1":
            alert("Cervical agregado a la lista");
            precioTotal = precioTotal + cervicalPrecio;
            resumen = resumen + cervical + "\n";
            break;
        case "2":
            alert("Dorsal agregado a la lista");
            precioTotal = precioTotal + dorsalPrecio;
            resumen = resumen + dorsal + "\n";
            break;
        case "3":
            alert("Lumbosacra agregado a la lista");
            precioTotal = precioTotal + lumbosacraPrecio;
            resumen = resumen + lumbosacra + "\n";
            break;
        case "4":
            alert("Columna completa agregado a la lista");
            precioTotal = precioTotal + columnaCompletaPrecio;
            resumen = resumen + columnaCompleta + "\n";
            break;
        case "5":
            break;
        default:
            alert("Opción no válida");
            break;
    }
}


//Región extremidades
function regionExtremidades() {
    let extremidades=prompt("1-Hombro \n2-Brazo \n3-Codo \n4-Antebrazo \n5-Mano y Muñeca \n6-Fémur \n7-Rodilla \n8-Pierna \n9-Pie \n10-Volver");

    switch (extremidades) {
        case "1":
            alert("Hombro agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + hombro + "\n";
            break;
        case "2":
            alert("Brazo agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + brazo + "\n";
            break;
        case "3":
            alert("Codo agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + codo + "\n";
            break;
        case "4":
            alert("Antebrazo agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + antebrazo + "\n";
            break;
        case "5":
            alert("Mano y Muñeca agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + manoMuneca + "\n";
            break;
        case "6":
            alert("Fémur agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + femur + "\n";
            break;
        case "7":
            alert("Rodilla agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + rodilla + "\n";
            break;
        case "8":
            alert("Pierna agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + pierna + "\n";
            break;
        case "9":
            alert("Pie agregado a la lista");
            precioTotal = precioTotal + extremidadesPrecio;
            resumen = resumen + pie + "\n";
            break;
        case "10":
            break;
        default:
            alert("Opción no válida");
            break;
    }
    
}


//Solicitud Regiones Anatómicas
function regiones() {

    let opcion=prompt("SELECCIONE REGIÓN ANATÓMICA A ESTUDIAR: \n1-Cabeza \n2-Columna \n3-Tórax \n4-Abdómen \n5-Extremidades superiores o inferiores \n6-Finalizar");

    while (opcion != "6") {
        switch (opcion) {
            case "1":
                //LLamado a función para especificar región de cabeza
                regionCabeza();
                break;

            case "2":
                //LLamado a función para especificar región de columna
                regionColumna();
                break;
            
            case "3":
                alert("Tórax agregado a la lista");
                precioTotal = precioTotal + toraxPrecio;
                resumen = resumen + torax + "\n";
                break;
            
            case "4":
                alert("Abdómen agregado a la lista");
                precioTotal = precioTotal + abdomenPrecio;
                resumen = resumen + abdomen + "\n";
                break;
            
            case "5":
                //Llamado a función para expecificar extremidades
                regionExtremidades();
                break;
                
            default:
                alert("Opción no válida");
                break;
        }
        opcion=prompt("SELECCIONE REGIÓN ANATÓMICA A ESTUDIAR: \n1-Cabeza \n2-Columna \n3-Tórax \n4-Abdómen \n5-Extremidades superiores o inferiores \n6-Finalizar");
    }
}





//Menú
let nombrePaciente;
let dniPaciente;

function datosPaciente() {

    nombrePaciente=prompt("INGRESE LOS DATOS DEL PACIENTE: \nNOMBRE Y APELLIDO:");
    dniPaciente=prompt("DNI PACIENTE: ");

    regiones();

}


//Registro
alert("-----RADIOLOGÍA MENDOZA----- \nSistema de solicitud de radiografías. \nAcceso exclusivo para profesionales médicos.");

let nombreRegistro=prompt("BIENVENIDO/A DOCTOR/A A RADIOLOGÍA MENDOZA. \nIngrese su nombre y apellido para registrarse. Con su registro podrá solicitar estudios para sus pacientes.");

let passRegistro=prompt("Cree su contraseña.");

let matriculaRegistro=prompt("Ingrese su matrícula");

alert("Ha sido registrado correctamente. Inicie sesión.");


//Inicio de sesión
for (let i=1; i<=3; i++) {
    let nombreIngreso=prompt("INICIO DE SESION. \nIngrese su nombre y apellido");
    let passIngreso=prompt("Ingrese su contraseña");

    if (nombreIngreso === nombreRegistro && passIngreso === passRegistro) {
        alert("INICIO DE SESIÓN CORRECTO. \nHola Dr/a "+nombreIngreso+"\nMatrícula número: "+matriculaRegistro);
        //Llamado a función para presentar datos del paciente
        datosPaciente();
        break;
    } else if (i===3) {
        alert("Fallaste los tres intentos.");
    } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.")
    }
}

alert("RESUMEN DE ESTUDIOS SOLICITADOS. \n\nPACIENTE: "+nombrePaciente+"\nDNI: "+dniPaciente+ "\n"+resumen+"\nPRECIO TOTAL: $"+precioTotal);
alert("DERIVE SU PACIENTE A LA SALA DE RAYOS X.\nMUCHAS GRACIAS !");