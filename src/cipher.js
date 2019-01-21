window.cipher = {
  // ...
  encode: (offset, mensaje) => {
    offset = parseInt(offset)
    let cifrado = ""; 
    for (let i = 0; i < mensaje.length; i++)
    {
      let letra = mensaje[i]
      let obtenerAscii = letra.charCodeAt();
      let conversion = (obtenerAscii-65+offset)%26+65;
      
      let resultadoCifrado = String.fromCharCode(conversion);
      cifrado+=resultadoCifrado;
    }
    return cifrado 
  },
  decode: (offsetDecode, mensajeDecode) => {
    offsetDecode = parseInt(offsetDecode)
    let cifrado = ""; 
    for (let i = 0; i < mensajeDecode.length; i++)
    {
      let letra = mensajeDecode[i]
      let obtenerAscii = letra.charCodeAt();
      let conversion = (obtenerAscii+65-offsetDecode)%26+65;
      let resultadoCifrado = String.fromCharCode(conversion);
      cifrado+=resultadoCifrado;
    }
    return cifrado 


  }
}
/*  x - 65 + n ) % 26 + 65*/

  

  
  