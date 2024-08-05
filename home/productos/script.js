const arregloImagenes = ["Arroz.webp","Premezcla.webp","Tallarines.webp", "Yerba.webp", "Azucar.webp", "DulceDeLeche.webp", "EsenciaVainilla.webp", "Gaseosa.webp", "Bizcochitos.webp", "Mermelada.webp", "Polenta.webp", "Aceite.webp"]
const arregloProductos = ["Arroz Integral Cañuelas", "Premezcla Dimax sin T.A.C.C", "Tallarines Marolio", "Yerba Playadito", "Azucar Rubia Ledesma", "Dulce De Leche Milkaut", "Esencia de Vainilla 'El Castillo'", "Gaseosa Cunnington sabor Pomelo", "Bizcochitos '9 de Oro'", "Mermelada de Damasco Light Noel", "Polenta Presto Pronta", "Aceite Natura"]
const arregloPrecios = [2800, 4500, 1100, 3800, 2200, 5900, 5000, 1300, 2500, 2000, 1600, 1700];
const arregloStock = [40, 20, 36, 60, 50, 22, 27, 54, 15, 35, 46, 12];

let subtotal = 0;
let inputs = document.querySelectorAll("div input");

function cargaDeArticulos() {
    let j = 0;
    let productos = document.querySelectorAll("#listaProductos p, #listaProductos img");
    for (let i=0; i < productos.length; i++) {
        productos[i].src = "articulos/" + arregloImagenes[j];
        productos[i+1].innerText = arregloProductos[j];
        productos[i+2].innerText = `Precio unitario: $${arregloPrecios[j]}`;
        productos[i+3].innerText = `${arregloStock[j]} unidades en stock.`;
        i+=3;
        j++;
    }
}

function validacionDelStock() {
    let productosAComprar = 0;
    let valido = true;
    let i = 0;
    inputs.forEach(input => {
        let cantidad = parseInt(Number(input.value));
        if (cantidad >= 0) {
            if (cantidad <= arregloStock[i] ) {
                productosAComprar += Number(input.value);
                valido = true;
            } else {
                alert("Ingrese una cantidad válida.");
                valido = false;
            }
        } else {
            alert("Ingrese una cantidad válida.")
            valido = false;
        }
        i++;
    })
    return valido;
}

function compraProductos(cantidad, indice) {
    subtotal += cantidad*arregloPrecios[indice];
    arregloStock[indice] = arregloStock[indice]-cantidad;
}

function mostrarCompra() {
    document.getElementById('total').innerText = `${subtotal}`;
    alert("¡Muchas gracias por su compra!")
    let j = 0
    let productos = document.querySelectorAll('#listaProductos p, #listaProductos img');
        for (let i = 0; i < productos.length; i++) {
        productos[i+3].innerText = `${arregloStock[j]} unidades en stock.`
        j++;
        i+=3;
    }
}
cargaDeArticulos();

document.querySelector('#confirmarCompra').addEventListener("click",() => {
    if (validacionDelStock()) {
        let index = 0;
        inputs.forEach(input => {
            let cantidad = parseInt(Number(input.value));
            if (cantidad >= 0 && cantidad <= arregloStock[index]) {
                compraProductos(cantidad, index);
            }
            index++;
        })
        if (subtotal > 0) {
            mostrarCompra();
        }

    } else {
        alert("Hubo un error en la compra.");
    }
}) 