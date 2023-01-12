const searchAnatomia=document.querySelector("#searchAnatomia"),
btnBuscar=document.querySelector("#btnBuscar"),
cardContainer=document.querySelector(".cardContainer"),
paciente=document.querySelector(".datosPaciente"),
tbody=document.querySelector("#tbody"),
btnFinalizar=document.querySelector("#btnFinalizar"),
mensajeFinal=document.querySelector("#mensajeFinal");



//CONSTRUCTOR DE LAS REGIONES
class Region {
    constructor(id,region,cantidad,precio,img) {
        this.id=id
        this.region=region
        this.cantidad=cantidad
        this.precio=precio
        this.img=img
    }
}

const regionesAnatomicas=[
    new Region (1,"Cráneo completo",1,5000,"img_craneoCompleto.png"),
    new Region (2,"Huesos propios de la nariz",1,2000,"img_nariz.png"),
    new Region (3,"Senos paranasales",1,2000,"img_spn.png"),
    new Region (4,"Panóramica dental",1,2000,"img_dental.png"),
    new Region (5,"Columna completa",1,10000,"img_columnaCompleta.png"),
    new Region (6,"Cervical",1,2500,"img_cervical.png"),
    new Region (7,"Dorsal",1,3500,"img_dorsal.png"),
    new Region (8,"Lumbosacra",1,3000,"img_lumbar.png"),
    new Region (9,"Tórax",1,5000,"img_torax.png"),
    new Region (10,"Abdómen",1,5000,"img_abdomen.png"),
    new Region (11,"Hombro",1,1500,"img_hombro.png"),
    new Region (12,"Brazo",1,1000,"img_brazo.png"),
    new Region (13,"Codo",1,1000,"img_codo.png"),
    new Region (14,"Antebrazo",1,1000,"img_antebrazo.png"),
    new Region (15,"Muñeca",1,1000,"img_muñeca.png"),
    new Region (16,"Mano",1,1000,"img_mano.png"),
    new Region (17,"Pelvis",1,5000,"img_pelvis.png"),
    new Region (18,"Fémur",1,1500,"img_femur.png"),
    new Region (19,"Rodilla",1,1000,"img_rodilla.png"),
    new Region (20,"Pierna",1,1000,"img_pierna.png"),
    new Region (21,"Tobillo",1,1000,"img_tobillo.png"),
    new Region (22,"Pie",1,1000,"img_pie.png"),
]



//Filtrar servicios
function filtrarServicios(filtro) {
    let filtrado= regionesAnatomicas.filter((el)=>{
        return el.region.includes(filtro);
    })
    return filtrado;
}


//Funciones
function guardarSS(arr) {
    sessionStorage.setItem("listaSolicitada", JSON.stringify(arr))
}



//Crear HTML
function crearHtml(array) {

    cardContainer.innerHTML="";

    array.forEach ((el) => {
        const div = document.createElement("div")
        div.classList.add("card")

        //Desestructuración
        const {id, region, precio, img} = el

        div.innerHTML=
        `<img src="../img/${img}">
            <div class="contenido">
                <h2>${region}</h2>
                <p>Precio: $${precio}</p>
                <button id="agregar${id}">Agregar a la lista</button>
            </div>`


        cardContainer.appendChild(div)

        const btnAgregarALista=document.getElementById(`agregar${el.id}`);

        btnAgregarALista.addEventListener("click", ()=> {
            agregarALista(el.id)
        })

    })
}

//Llamamos función para crear contenido
crearHtml(regionesAnatomicas);


//Evento buscar
btnBuscar.addEventListener("click", (e)=>{
    e.preventDefault();

    let filtro= filtrarServicios(searchAnatomia.value);
    
    crearHtml(filtro);
})


// //Datos del paciente dinámico
const activePaciente= JSON.parse(sessionStorage.getItem("pacienteActivo"))
console.log(activePaciente);
console.log(activePaciente[0].nombre);

paciente.innerHTML =
    `<h2>DATOS DEL PACIENTE</h2>
    <p><strong>NOMBRE Y APELLIDO: </strong>${activePaciente[0].nombre} ${activePaciente[0].apellido}</p>
    <p><strong>DNI: </strong>${activePaciente[0].dni}</p>`


//Agregar a lista
const listaResumen=[]

const agregarALista = (parametroId) => {
    //Verificamos si ya existe la región en la lista
    const existe= listaResumen.some((region) => region.id === parametroId)


    //Si ya existe se actualiza la cantidad sino se agrega a la lista
    if (existe) {
        const region = listaResumen.map((region)=> {
            if (region.id === parametroId) {
                region.cantidad++
            }
        })
    } else {
        const item = regionesAnatomicas.find((region) => region.id === parametroId)
        listaResumen.push(item)
    }

    crearTabla(listaResumen)
}

//Eliminar de la lista
const eliminarDeLista = (parametroId) => {
    const item = listaResumen.find((el) => el.id === parametroId)

    //Buscamos índice
    const indice = listaResumen.indexOf(item);

    listaResumen.splice(indice, 1);
    
    crearTabla(listaResumen)
    guardarSS(listaResumen)
}


//Creando tabla dinámicamente con las regiones solicitadas

function crearTabla(arr) {
    
    tbody.innerHTML="";

    let total= listaResumen.reduce((acc,region) => acc + region.cantidad * region.precio, 0)

    arr.forEach((item)=>{

        const tr=document.createElement("tr")
        

        //Desestructuración
        const {id, region, cantidad, precio} = item
    
        tr.innerHTML =
        `<td>${region}</td>
        <td>${precio}</td>
        <td>${cantidad} <button id="borrar${id}" class="btn btn-danger">Borrar</button></td>`
        // <td><button id="borrar${id}">Borrar</button></td>`

        tbody.appendChild(tr)

        guardarSS(listaResumen);
        
        const btnBorrar = document.getElementById(`borrar${id}`)
        
        btnBorrar.addEventListener("click", () => {
            eliminarDeLista(`${id}`)
        })
        
    })

    const trPrecioTotal=document.createElement("tr")

    trPrecioTotal.innerHTML =
    `<tr>
    <td>---</td>
    <td>---</td>
    <td>Precio total: $${total}</td>
    </tr>`

    tbody.appendChild(trPrecioTotal);
    
}


//Mensaje Final
btnFinalizar.addEventListener("click", ()=> {
    if (listaResumen.length === 0 ) {
        mensajeFinal.innerText= "No ha solicitado ningún estudio"
    } else {
        mensajeFinal.innerText= "Derive su paciente a la sala de rayos X. Muchas Gracias !"
    }
})




