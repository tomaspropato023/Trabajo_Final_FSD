let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let consulta = document.getElementById('consulta');
let btnEnviar = document.getElementById('enviar');

let informacion = [];

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    if (!nombre.value.trim() || !apellido.value.trim() || !email.value.trim() || !telefono.value.trim() || !consulta.value.trim()) {
        alert("Tiene que rellenar todos los espacios.");
    } else {
        informacion[0] = `Nombre: ${nombre.value}`;
        informacion[1] = ` Apellido: ${apellido.value}`;
        informacion[2] = ` Correo: ${email.value}`;
        informacion[3] = ` Telefono: ${telefono.value}`.toString();
        informacion[4] = ` Mensaje: ${consulta.value}`;
    }
    let blob = new Blob ([informacion], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "Formulario.txt");
});

