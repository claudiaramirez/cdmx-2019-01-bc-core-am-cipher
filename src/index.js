

const buttonCifrar = document.getElementById("button_encriptar");

buttonCifrar.addEventListener("click", () => {
    
    const mensaje = document.getElementById("text_plano").value.toUpperCase();// obtener mensaje 
    const offset = document.getElementById("offset").value;// declare para tomar offfset 

    const msj_cifrado = window.cipher.encode(offset,mensaje);

    //console.log(msj_cifrado);
    document.getElementById("mensaje_encriptado").innerHTML= msj_cifrado, offset;

});

