
//const offset= document.getElementById("offset").value;
//const mensaje = document.getElementById("text_plano");
const buttonCifrar = document.getElementById("button_encriptar");

buttonCifrar.addEventListener("click", () => {
    const mensaje = document.getElementById("text_plano").value;
    //const mayus = insertarCifrado.toUpperCase();
   const algo = cipher.encode(3,mensaje);
   console.log(algo);
   document.getElementById("mensaje_encriptado").innerHTML=algo;

});

