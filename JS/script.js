
// // -------------------------------------------------PRIMER INTENTO FALLIDO--------------------------------------------------------

// let sueldoNeto = Number(prompt("Inserta tu ingreso mensual"));
// alert("Organicemos tu economia")


// for (let i = 1; i = 1; i--){
//     let gastoUno = Number(prompt("Cuanto gastas en la compra mensual para tu hogar?"));
//     // let gastoDos = Number(prompt("Cuanto gastas en tus servicios fijos?"));
//     // let gastoTres = Number(prompt("Cuanto gastas en tu indumentaria?"));
//     // let gastoCuatro = Number(prompt("Cuanto gastas en tu forma de trasladarte?"));
//     // let gastoCinco = Number(prompt("Cuanto gastas en gastos varios?"));

//     if (!parseInt(gastoUno)){
//         alert("no ingresaste un numero");
//         break;
// //    } else if (!parseInt (gastoDos)) {
// //         alert("no ingresaste un numero");
// //         break;
// //     } else if (!parseInt (gastoTres)) {
// //         alert("no ingresaste un numero");
// //         break;
// //     } else if (!parseInt (gastoCuatro)) {
// //         alert("no ingresaste un numero");
// //         break;
// //     }  else if (!parseInt (gastoCinco)) {
// //         alert("no ingresaste un numero");
// //         break;
//     } else if (gastoUno >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoUno));
//         break;
//     // } else if (gastoDos >= sueldoNeto ) {
//     //     alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoDos));
//     //     break;
//     // } else if (gastoTres >= sueldoNeto ) {
//     //     alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoTres));
//     //     break;
//     // } else if (gastoCuatro >= sueldoNeto ) {
//     //     alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCuatro));
//     //     break;
//     // } else if (gastoCinco >= sueldoNeto ) {
//     //     alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCinco));
//     //     break;
//     }
// }
// -------------------------------------- SEGUNDO INTENTO  CAMBIADO-------------------------------------------------------


// for (let i = 1; i <= 1; i++){
//     let gastoUno = Number(prompt("Cuanto gastas en la compra mensual para tu hogar?"));
//     if (!parseInt(gastoUno)){
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoUno >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoUno));
//         break;
//     }
// }
// for (let i = 1; i <= 1; i++){
//     let gastoDos = Number(prompt("Cuanto gastas en tus servicios fijos?"));
//     if (!parseInt (gastoDos)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoDos >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoDos));
//         break;
//     }
// }
// for (let i = 1; i <= 1; i++){
//     let gastoTres = Number(prompt("Cuanto gastas en tu indumentaria?"));
//     if (!parseInt (gastoTres)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoTres >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoTres));
//         break;
//     }
// }
// for (let i = 1; i <= 1; i++){
//     let gastoCuatro = Number(prompt("Cuanto gastas en tu forma de trasladarte?"));
//     if (!parseInt (gastoCuatro)) {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoCuatro >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCuatro));
//         break;
//     }
// }
// for (let i = 1; i <= 1; i++){
//     let gastoCinco = Number(prompt("Cuanto gastas en gastos varios?"));
//     if (!parseInt (gastoCinco))  {
//         alert("no ingresaste un numero");
//         break;
//     } else if (gastoCinco >= sueldoNeto ) {
//         alert("Te gastataste todo tu sueldo, total $" + (sueldoNeto - gastoCinco));
//         break;
//     }
// }


// ---------------------TERCER INTENTO---------------
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
alert("Te quedan " + resto);
}

