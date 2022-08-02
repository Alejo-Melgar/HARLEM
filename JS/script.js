// const saludarProspectoNuevo = (nombre, apellido, edad) => {
//     alert (`Bienvenid@ ${nombre} ${apellido}, tienes ${edad}.`);
// }
// let nombreProspecto = prompt ("Ingresa tu nombre");
// let apellidoProspecto = prompt ("Ingresa tu apellido");
// let edadProspecto = prompt ("Ingresa tu edad");
// let localidadProspecto = prompt("Ingresa tu localidad");
// let calleProspecto = prompt("Ingresa tu calle y altura")


// const mensajeDeIdentidad = () => {
//     alert("Comencemos, crea tu propio estilo.");
// }

// mensajeDeIdentidad ();

// saludarProspectoNuevo (nombreProspecto, apellidoProspecto, edadProspecto);


// let sueldoNeto = Number(prompt("Inserta tu ingreso mensual"));
// alert("Organicemos tu economia")

// for (let i = 1; i <= 1; i++){
    
//     let gastoUno = Number(prompt("Cuanto gastas en la compra mensual para tu hogar?"));
//     if (!parseInt(gastoUno)){
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoUno >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoUno));
//         break;
//     } 
//     let gastoDos = Number(prompt("Cuanto gastas en tus servicios fijos?"));
//     if (!parseInt (gastoDos)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoDos >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoDos));
//         break;
//     }
//     let gastoTres = Number(prompt("Cuanto gastas en tu indumentaria?"));
//     if (!parseInt (gastoTres)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoTres >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoTres));
//         break;
//     }
//     let gastoCuatro = Number(prompt("Cuanto gastas en tu forma de trasladarte?"));
//     if (!parseInt (gastoCuatro)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoCuatro >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCuatro));
//         break;
//     }
//     let gastoCinco = Number(prompt("Cuanto gastas en gastos varios?"));
//     if (!parseInt (gastoCinco))  {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoCinco >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCinco));
//         break;
//     }
    


// let gastoTotal = (gastoCinco + gastoCuatro + gastoTres + gastoDos + gastoUno);
// let resto = sueldoNeto - gastoTotal;

// alert("Tu gasto total es de " + gastoTotal );
// alert(`Te quedan ${resto}.`);
// }



// function datosDelProspecto (nombre, edad, localidad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.localidad = localidad;
//     this.calle = calle;
// }
// const prospecto1 = new datosDelProspecto (nombreProspecto, edadProspecto, localidadProspecto, calleProspecto);

// console.log(prospecto1);

// function productos (producto) {
//     this.producto = producto.nombre
// }

// const producto1 = new productos ({nombre : "Pulsera de oro"});
// const producto2 = new productos ({nombre : "Cadena de oro"});
// const producto3 = new productos ({nombre : "Anillo de oro"});
// const producto4 = new productos ({nombre : "Aros de oro"});
// const producto5 = new productos ({nombre : "Anillo de plata"});
// const producto6 = new productos ({nombre : "Collar de perlas"});
// const producto7 = new productos ({nombre : "Cadena rockstar"});


// console.log(producto1);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);
// console.log(producto5);
// console.log(producto6);
// console.log(producto7);


// const productosSeleccionados = [producto1, producto2, producto3, producto4, producto5];
// console.log(productosSeleccionados);


// const productosGuardadosEnFavoritos = [producto6, producto7];
// console.log(productosGuardadosEnFavoritos);

// const totalProductos = productosGuardadosEnFavoritos.concat(productosSeleccionados);
// console.log(totalProductos);

// for (const misProductos of totalProductos) {
//     console.log(`Tus productos son ${misProductos}`);

// }

// totalProductos.splice (3, 2);
// console.log(totalProductos);



let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let edadUsuario = localStorage.getItem('edadUsuario');
let emailUsuario = localStorage.getItem('emailUsuario');
let calleUsuario = localStorage.getItem('calleUsuario');
let alturaUsuario = localStorage.getItem('alturaUsuario');
let localidadUsuario = localStorage.getItem('localidadUsuario');

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const exampleFormControlInput1 = document.querySelector('#exampleFormControlInput1');
const calleDomicilio = document.querySelector('#calleDomicilio');
const altura = document.querySelector('#altura');
const Localidad = document.querySelector('#Localidad');
const contFormulario = document.querySelector('#contFormulario');
const contenido = document.querySelector('#contenido');
const logOut = document.querySelector('#logOut');


logOut.onclick = () => {
    localStorage.clear ();
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);
    localStorage.setItem('edadUsuario', edad.value);
    localStorage.setItem('emailUsuario', exampleFormControlInput1.value);
    localStorage.setItem('calleUsuario', calleDomicilio.value);
    localStorage.setItem('alturaUsuario', altura.value);
    localStorage.setItem('localidadUsuario', Localidad.value);

    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;
    edadUsuario = edad.value;
    emailUsuario = exampleFormControlInput1.value;
    calleUsuario = calleDomicilio.value;
    alturaUsuario = altura.value;
    localidadUsuario = Localidad.value;



})
const ocultarFormulario = () => {
    contFormulario.style.display = 'none';
    contenido.innerHTML = `Hola ${nombreUsuario}, has completado el formulario correctamente. Gracias!`
}

if (!!nombreUsuario && !!apellidoUsuario && !!edadUsuario && !!emailUsuario && !!calleUsuario && !!alturaUsuario && !!localidadUsuario) {
    ocultarFormulario();
}


const contenedorProductos = document.getElementById('contenedor-productos')

let stockProductos = [
    {id: 1, nombre: "Pulsera 1", tipo: "pulsera", cantidad: 1, precio: 2300, imagen: "../multimedia/pulsera2.jpeg"},
    {id: 2, nombre: "Pulsera 2", tipo: "pulsera", cantidad: 1, precio: 1500, imagen: "../multimedia/pulsera3.jpeg"},
    {id: 3, nombre: "Anillo 1", tipo: "anillo", cantidad: 1, precio: 1700, imagen: "../multimedia/anillo1.jpeg"},
    {id: 4, nombre: "Anillo 2", tipo: "anillo", cantidad: 1, precio: 2500, imagen: "../multimedia/anillo2.jpeg"},
    {id: 5, nombre: "Cadena 1", tipo: "cadena", cantidad: 1, precio: 2750, imagen: "../multimedia/cadena1.jpeg"},
    {id: 6, nombre: "Cadena 2", tipo: "cadena", cantidad: 1, precio: 2300, imagen: "../multimedia/cadena2.jpeg"}

]

stockProductos.forEach ((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.imagen} alt="">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar"> Agregar <i class fas-fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
})

