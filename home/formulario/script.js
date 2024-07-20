let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let consulta = document.getElementById('consulta');
let btnEnviar = document.getElementById('enviar');

let informacion = [];

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    informacion[0] = nombre.value;
    informacion[1] = apellido.value;
    informacion[2] = email.value;
    informacion[3] = telefono.value.toString();
    informacion[4] = consulta.value;
    let blob = new Blob ([informacion], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Contacto.txt");
});

