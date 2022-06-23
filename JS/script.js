const saludarProspectoNuevo = (nombre, apellido, edad) => {
    alert (`Bienvenid@ ${nombre} ${apellido}, tienes ${edad}.`);
}
let nombreProspecto = prompt ("Ingresa tu nombre");
let apellidoProspecto = prompt ("Ingresa tu apellido");
let edadProspecto = prompt ("Ingresa tu edad");
let localidadProspecto = prompt("Ingresa tu localidad");
let calleProspecto = prompt("Ingresa tu calle y altura")


const mensajeDeIdentidad = () => {
    alert("Comencemos, crea tu propio estilo.");
}

mensajeDeIdentidad ();

saludarProspectoNuevo (nombreProspecto, apellidoProspecto, edadProspecto);


let sueldoNeto = Number(prompt("Inserta tu ingreso mensual"));
alert("Organicemos tu economia")

for (let i = 1; i <= 1; i++){
    
    let gastoUno = Number(prompt("Cuanto gastas en la compra mensual para tu hogar?"));
    if (!parseInt(gastoUno)){
        alert("no ingresaste un numero");
        break;
    } else if (gastoUno >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoUno));
        break;
    } 
    let gastoDos = Number(prompt("Cuanto gastas en tus servicios fijos?"));
    if (!parseInt (gastoDos)) {
        alert("no ingresaste un numero");
        break;
    } else if (gastoDos >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoDos));
        break;
    }
    let gastoTres = Number(prompt("Cuanto gastas en tu indumentaria?"));
    if (!parseInt (gastoTres)) {
        alert("no ingresaste un numero");
        break;
    } else if (gastoTres >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoTres));
        break;
    }
    let gastoCuatro = Number(prompt("Cuanto gastas en tu forma de trasladarte?"));
    if (!parseInt (gastoCuatro)) {
        alert("no ingresaste un numero");
        break;
    } else if (gastoCuatro >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCuatro));
        break;
    }
    let gastoCinco = Number(prompt("Cuanto gastas en gastos varios?"));
    if (!parseInt (gastoCinco))  {
        alert("no ingresaste un numero");
        break;
    } else if (gastoCinco >= sueldoNeto ) {
        alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCinco));
        break;
    }
    


let gastoTotal = (gastoCinco + gastoCuatro + gastoTres + gastoDos + gastoUno);
let resto = sueldoNeto - gastoTotal;

alert("Tu gasto total es de " + gastoTotal );
alert(`Te quedan ${resto}.`);
}



function datosDelProspecto (nombre, edad, localidad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.localidad = localidad;
    this.calle = calle;
}
const prospecto1 = new datosDelProspecto (nombreProspecto, edadProspecto, localidadProspecto, calleProspecto);

console.log(prospecto1);

function productos (producto) {
    this.producto = producto.nombre
}

const producto1 = new productos ({nombre : "Pulsera de oro"});
const producto2 = new productos ({nombre : "Cadena de oro"});
const producto3 = new productos ({nombre : "Anillo de oro"});
const producto4 = new productos ({nombre : "Aros de oro"});
const producto5 = new productos ({nombre : "Anillo de plata"});
const producto6 = new productos ({nombre : "Collar de perlas"});
const producto7 = new productos ({nombre : "Cadena rockstar"});


console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
console.log(producto6);
console.log(producto7);


const productosSeleccionados = [producto1, producto2, producto3, producto4, producto5];
console.log(productosSeleccionados);


const productosGuardadosEnFavoritos = [producto6, producto7];
console.log(productosGuardadosEnFavoritos);

const totalProductos = productosGuardadosEnFavoritos.concat(productosSeleccionados);
console.log(totalProductos);

for (const misProductos of totalProductos) {
    console.log(`Tus productos son ${misProductos}`);

}

totalProductos.splice (3, 2);
console.log(totalProductos);



