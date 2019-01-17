window.cipher = {
  // ...
  encode: (offset, mensaje) => {
    let offsetPasear = parseInt(offset)
    let cifrado = ""; 
    for (let i = 0; i < mensaje.length; i++)
    {
      let letra = mensaje[i]
      let obtenerAscii = letra.charCodeAt();
      let conversion = (obtenerAscii-65+offsetPasear)%26+65;
      
      let resultadoCifrado = String.fromCharCode(conversion);
      cifrado+=resultadoCifrado;
    }

    //console.log(cifrado);
    return cifrado 
  }
}

/*  x - 65 + n ) % 26 + 65*/

  

  
  