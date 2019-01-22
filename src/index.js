const buttonCifrar = document.getElementById("button_encriptar");
const buttonDescifrar = document.getElementById("button_desencriptar");
const mensaje = document.getElementById("text_plano");// obtener mensaje 
const offset_valor = document.getElementById("offset");
const mensajeEncriptado = document.getElementById("mensaje_encriptado");

buttonCifrar.addEventListener("click", () => {  
    let mensajeCifrar = mensaje.value.toUpperCase();
    let offset = offset_valor.value
    const encriptar = window.cipher.encode(offset,  mensajeCifrar)
    mensajeEncriptado.value = encriptar  
});

buttonDescifrar.addEventListener("click", () => {  
    let mensajeDesifrar = mensajeEncriptado.value.toUpperCase();
    let offsetDecode = offset_valor.value
    const encriptar = window.cipher.decode(offsetDecode, mensajeDesifrar)
    //const mensaje = document.getElementById("text_plano"). value = encriptar;
    mensaje.value = encriptar  
});

function Focus(){
    document.getElementById("text_plano").focus();
}
Focus();



