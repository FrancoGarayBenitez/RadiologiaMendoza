const searchAnatomia=document.querySelector("#searchAnatomia"),
btnBuscar=document.querySelector("#btnBuscar"),
cardContainer=document.querySelector(".cardContainer"),
paciente=document.querySelector(".datosPaciente"),
tbody=document.querySelector("#tbody"),
btnFinalizar=document.querySelector("#btnFinalizar"),
mensajeFinal=document.querySelector("#mensajeFinal");


//Filtrar servicios
function filtrarServicios(arr, filtro) {
    let filtrado= arr.filter((el)=>{
        return el.region.includes(filtro.toLowerCase());
    })
    return filtrado;
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
                <h2>${region.toUpperCase()}</h2>
                <p>Precio: $${precio}</p>
                <button id="agregar${id}">Agregar a la lista</button>
            </div>`


        cardContainer.appendChild(div)

        const btnAgregarALista=document.getElementById(`agregar${el.id}`);

        btnAgregarALista.addEventListener("click", ()=> {

            Toastify({
                text: "Agregado a la lista",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();

            agregarALista(array, el.id)
        })

    })
}


//Renderizar HTML con fetch
async function fetch_JSON() {
    
    const response= await fetch("../data/data.json")
    const data= await response.json()

    //forEach para pasar a minúsculas las regiones y así poder filtrar en botón buscar
    data.forEach((el)=>{
        el.region = el.region.toLowerCase()
    })

    //Función para renderizar cards
    crearHtml(data);

    //Evento buscar
    btnBuscar.addEventListener("click", (e)=>{
    e.preventDefault();

    let filtro= filtrarServicios(data, searchAnatomia.value);
    
    crearHtml(filtro);
    })

}

//Llamado a función para renderizar
fetch_JSON()





//Datos del paciente dinámico
const activePaciente= JSON.parse(sessionStorage.getItem("pacienteActivo"))

paciente.innerHTML =
    `<h2>DATOS DEL PACIENTE</h2>
    <p><strong>NOMBRE Y APELLIDO: </strong>${activePaciente[0].nombre} ${activePaciente[0].apellido}</p>
    <p><strong>DNI: </strong>${activePaciente[0].dni}</p>`




//Agregar a una lista las regiones solicitadas
const listaResumen=[]

const agregarALista = (arr, parametroId) => {
    //Verificamos si ya existe la región en la lista
    const existe= listaResumen.some((region) => region.id === parametroId)


    //Si ya existe se actualiza la cantidad sino se agrega a la lista
    if (existe) {
        listaResumen.map((region)=> {
            if (region.id === parametroId) {
                region.cantidad++
            }
        })
    } else {
        const item = arr.find((region) => region.id === parametroId)
        listaResumen.push(item)
    }

    //Llamado a función para renderizar tabla
    crearTabla(listaResumen)
}




//Eliminar de la lista
const eliminarDeLista = (parametroId) => {

    //Actualizamos cantidad
    listaResumen.map((region)=> {
        if (region.id === parametroId) {
            region.cantidad = 1
        }
    })

    //Buscamos aquel elemento del array que se desea borrar
    const item = listaResumen.find((el) => el.id === parametroId)

    //Buscamos índice de ese elemento
    const indice = listaResumen.indexOf(item);

    //Eliminamos elemento del array
    listaResumen.splice(indice, 1);

    //Actualizamos tabla
    crearTabla(listaResumen)

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
        `<td>${region.toUpperCase()}</td>
        <td>${precio}</td>
        <td>${cantidad} <button id="borrar${id}" class="btn btn-danger">Borrar</button></td>`

        tbody.appendChild(tr)
        
        const btnBorrar = document.getElementById(`borrar${item.id}`)
        
        btnBorrar.addEventListener("click", () => {
            eliminarDeLista(item.id)
        })
        
    })

    const trPrecioTotal=document.createElement("tr")

    trPrecioTotal.innerHTML =
    `<td>---</td>
    <td>---</td>
    <td>Precio total: $${total}</td>`

    tbody.appendChild(trPrecioTotal);
    
}


//Mensaje Final
btnFinalizar.addEventListener("click", ()=> {
    if (listaResumen.length === 0 ) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No ha seleccionado ninguna región',
          })

    } else {

        Swal.fire({
            title: '¿Guardar los cambios?',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Guardado', 'Derive su paciente a la sala de rayos X. Muchas Gracias !', 'success')
               
                listaResumen.length = 0
                crearTabla(listaResumen)

                setTimeout(()=>{
                    Swal.fire({
                        title: 'Seleccione la opción deseada',
                        showDenyButton: true,
                        confirmButtonText: 'Ingresar otro paciente',
                        denyButtonText: `Salir del sistema`,
                      }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href="../pages/paciente.html"
                        } else if (result.isDenied) {
                            window.location.href="../index.html"
                        }
                      })
                }, 2000)
            } 
        })
    
    }
})




