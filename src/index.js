
//const offset = document.getElementById("offset").value;
const buttonCifrar = document.getElementById("button_encriptar");

buttonCifrar.addEventListener("click", () => {
    
    const mensaje = document.getElementById("text_plano").value.toUpperCase();
    const msj_cifrado = cipher.encode (offset,mensaje);

    console.log(msj_cifrado);
    document.getElementById("mensaje_encriptado").innerHTML= msj_cifrado;

});

