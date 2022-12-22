//CONSTRUCTOR DE LAS REGIONES
class Region {
    constructor(region,precio) {
        this.region=region;
        this.precio=precio;
    }
}

const regionesAnatomicas=[
    new Region ("Cráneo completo",5000),
    new Region ("Orbitas",2000),
    new Region ("Oídos",2000),
    new Region ("Macizo",2000),
    new Region ("Columna completa",10000),
    new Region ("Cervical",2500),
    new Region ("Dorsal",3500),
    new Region ("Lumbosacra",3000),
    new Region ("Tórax",5000),
    new Region ("Abdómen",5000),
    new Region ("Hombro",1500),
    new Region ("Brazo",1000),
    new Region ("Codo",1000),
    new Region ("Antebrazo",1000),
    new Region ("Mano y muñeca",1000),
    new Region ("Pelvis",5000),
    new Region ("Fémur",1500),
    new Region ("Rodilla",1000),
    new Region ("Pierna",1000),
    new Region ("Tobillo",1000),
    new Region ("Pie",1000),
]

//ARRAY VACÍO PARA INCLUIR LOS ESTUDIOS SOLICITADOS
resumen=[];


//Region cabeza
function regionCabeza() {
    let cabeza=prompt("1-Cráneo completo \n2-Órbitas \n3-Oídos \n4-Macizo facial \n5-Volver")
    switch (cabeza) {
        case "1":
            alert("Cráneo completo agregado a la lista");
            const search1Indice= regionesAnatomicas.findIndex((el)=>el.region==="Cráneo completo");
            resumen.push(regionesAnatomicas[search1Indice]);
            break;
        case "2":
            alert("Orbitas agregado a la lista");
            const search2Indice= regionesAnatomicas.findIndex((el)=>el.region==="Orbitas");
            resumen.push(regionesAnatomicas[search2Indice]);
            break;
        case "3":
            alert("Oídos agregado a la lista");
            const search3Indice= regionesAnatomicas.findIndex((el)=>el.region==="Oídos");
            resumen.push(regionesAnatomicas[search3Indice]);
            break;
        case "4":
            alert("Macizo facial agregado a la lista");
            const search4Indice= regionesAnatomicas.findIndex((el)=>el.region==="Macizo facial");
            resumen.push(regionesAnatomicas[search4Indice]);
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
    let columna=prompt("1-Columna completa \n2-Cervical \n3-Dorsal \n4-Lumbosacra \n5-Volver");
    switch (columna) {
        case "1":
            alert("Columna completa agregado a la lista");
            const search1Indice= regionesAnatomicas.findIndex((el)=>el.region==="Columna completa");
            resumen.push(regionesAnatomicas[search1Indice]);
            break;
        case "2":
            alert("Cervical agregado a la lista");
            const search2Indice= regionesAnatomicas.findIndex((el)=>el.region==="Cervical");
            resumen.push(regionesAnatomicas[search2Indice]);
            break;
        case "3":
            alert("Dorsal agregado a la lista");
            const search3Indice= regionesAnatomicas.findIndex((el)=>el.region==="Dorsal");
            resumen.push(regionesAnatomicas[search3Indice]);
            break;
        case "4":
            alert("Lumbosacra agregado a la lista");
            const search4Indice= regionesAnatomicas.findIndex((el)=>el.region==="Lumbosacra");
            resumen.push(regionesAnatomicas[search4Indice]);
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
    let extremidades=prompt("1-Hombro \n2-Brazo \n3-Codo \n4-Antebrazo \n5-Mano y Muñeca \n6-Fémur \n7-Rodilla \n8-Pierna \n9-Tobillo \n10-Pie \n11-Volver");

    switch (extremidades) {
        case "1":
            alert("Hombro agregado a la lista");
            const search1Indice= regionesAnatomicas.findIndex((el)=>el.region==="Hombro");
            resumen.push(regionesAnatomicas[search1Indice]);
            break;
        case "2":
            alert("Brazo agregado a la lista");
            const search2Indice= regionesAnatomicas.findIndex((el)=>el.region==="Brazo");
            resumen.push(regionesAnatomicas[search2Indice]);
            break;
        case "3":
            alert("Codo agregado a la lista");
            const search3Indice= regionesAnatomicas.findIndex((el)=>el.region==="Codo");
            resumen.push(regionesAnatomicas[search3Indice]);
            break;
        case "4":
            alert("Antebrazo agregado a la lista");
            const search4Indice= regionesAnatomicas.findIndex((el)=>el.region==="Antebrazo");
            resumen.push(regionesAnatomicas[search4Indice]);
            break;
        case "5":
            alert("Mano y Muñeca agregado a la lista");
            const search5Indice= regionesAnatomicas.findIndex((el)=>el.region==="Mano y muñeca");
            resumen.push(regionesAnatomicas[search5Indice]);
            break;
        case "6":
            alert("Fémur agregado a la lista");
            const search6Indice= regionesAnatomicas.findIndex((el)=>el.region==="Fémur");
            resumen.push(regionesAnatomicas[search6Indice]);
            break;
        case "7":
            alert("Rodilla agregado a la lista");
            const search7Indice= regionesAnatomicas.findIndex((el)=>el.region==="Rodilla");
            resumen.push(regionesAnatomicas[search7Indice]);
            break;
        case "8":
            alert("Pierna agregado a la lista");
            const search8Indice= regionesAnatomicas.findIndex((el)=>el.region==="Pierna");
            resumen.push(regionesAnatomicas[search8Indice]);
            break;
        case "9":
            alert("Tobillo agregado a la lista");
            const search9Indice= regionesAnatomicas.findIndex((el)=>el.region==="Tobillo");
            resumen.push(regionesAnatomicas[search9Indice]);
            break;
        case "10":
            alert("Pie agregado a la lista");
            const search10Indice= regionesAnatomicas.findIndex((el)=>el.region==="Pie");
            resumen.push(regionesAnatomicas[search10Indice]);
        case "11":
            break;
        default:
            alert("Opción no válida");
            break;
    }
    
}


//Solicitud Regiones Anatómicas
function regiones() {

    let opcion=prompt("SELECCIONE REGIÓN ANATÓMICA A ESTUDIAR: \n1-Cabeza \n2-Columna \n3-Tórax \n4-Abdómen \n5-Pelvis \n6-Extremidades superiores o inferiores \n7-Finalizar");

    while (opcion != "7") {
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
                const search1Indice= regionesAnatomicas.findIndex((el)=>el.region==="Tórax");
                resumen.push(regionesAnatomicas[search1Indice]);
                break;
            
            case "4":
                alert("Abdómen agregado a la lista");
                const search2Indice= regionesAnatomicas.findIndex((el)=>el.region==="Abdómen");
                resumen.push(regionesAnatomicas[search2Indice]);
                break;
            case "5":
                alert("Pelvis agregado a la lista");
                const search3Indice= regionesAnatomicas.findIndex((el)=>el.region==="Pelvis");
                resumen.push(regionesAnatomicas[search3Indice]);
                break;
            case "6":
                //Llamado a función para expecificar extremidades
                regionExtremidades();
                break;
            default:
                alert("Opción no válida");
                break;
        }
        opcion=prompt("SELECCIONE REGIÓN ANATÓMICA A ESTUDIAR: \n1-Cabeza \n2-Columna \n3-Tórax \n4-Abdómen \n5-Pelvis \n6-Extremidades superiores o inferiores \n7-Finalizar");
    }
}



//Datos del Paciente
let nombrePaciente;
let dniPaciente;

function datosPaciente() {

    nombrePaciente=prompt("INGRESE LOS DATOS DEL PACIENTE: \nNOMBRE Y APELLIDO:");
    dniPaciente=prompt("DNI PACIENTE: ");

    regiones();

}


//Registro
alert("-----RADIOLOGÍA MENDOZA----- \nSistema de solicitud de radiografías. \nAcceso exclusivo para profesionales médicos.");

let nombreRegistro=prompt("BIENVENIDO/A DOCTOR/A A RADIOLOGÍA MENDOZA. \nIngrese su nombre y apellido para registrarse. Con su registro podrá solicitar radiografías para sus pacientes.");

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


//RESUMEN AL FINALIZAR
function resumenFinalPrecio (arr,fn) {
    for (const elemento of arr) {
        fn(elemento.precio);
    }
}
function resumenFinalRegiones (arr,fn) {
    for (const elemento of arr) {
        fn(elemento.region);
    }
}

let totalPrecio=0;
let totalRegiones="";

function sumatoriaPrecios(num) {
    totalPrecio += num;
}
function sumatoriaRegiones(el) {
    totalRegiones += "\n" + el ;
}

resumenFinalRegiones(resumen,sumatoriaRegiones);
resumenFinalPrecio(resumen,sumatoriaPrecios);

alert("PACIENTE: \nNombre: "+nombrePaciente+"\nDNI: "+dniPaciente+"\n\nRADIOGRAFÍAS SOLICITADAS:"+totalRegiones+"\n\nPRECIO FINAL: $"+totalPrecio);
alert("DERIVE SU PACIENTE A LA SALA DE RAYOS X. MUCHAS GRACIAS !");