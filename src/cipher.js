window.cipher = {
  // ...
  encode: (offset, mensaje) => {
    offset = parseInt(offset)
    let cifrado = ""; 
    for (let i = 0; i < mensaje.length; i++)
    {
      let letra = mensaje[i];
      
        if (mensaje.charCodeAt(i) >= 65 && mensaje.charCodeAt(i) <= 90) {
          
            let obtenerAscii = letra.charCodeAt();
            //console.log(obtenerAscii);
            let conversion = (obtenerAscii-65+offset)%26+65;
            
            let resultadoCifrado = String.fromCharCode(conversion);
            
            cifrado+=resultadoCifrado;
            
        } else if (mensaje.charCodeAt(i) >= 97 && mensaje.charCodeAt(i) <= 122) {
         
            let obtenerAscii = letra.charCodeAt();
            
            let conversion = (obtenerAscii-97+offset)%26+97;
            
            let resultadoCifrado = String.fromCharCode(conversion);
            
            cifrado+=resultadoCifrado;
        }else{
            let resultadoCifrado = String (" ");

            cifrado+=resultadoCifrado;
        }
       
    }
    return cifrado 
  },
  
  decode: (offsetDecode, mensajeDecode) => {
      offsetDecode = parseInt(offsetDecode)
      let cifrado = ""; 
      for (let i = 0; i < mensajeDecode.length; i++)
      {
        if (mensajeDecode.charCodeAt(i) >= 65 && mensajeDecode.charCodeAt(i) <= 90) {
          let letra = mensajeDecode[i]
          let obtenerAscii = letra.charCodeAt();
          let conversion = (obtenerAscii+65-offsetDecode)%26+65;
          let resultadoCifrado = String.fromCharCode(conversion);
          cifrado+=resultadoCifrado;
        }
        else if (mensajeDecode.charCodeAt(i) >= 97 && mensajeDecode.charCodeAt(i) <= 122) {
          let letra = mensajeDecode[i]
          let obtenerAscii = letra.charCodeAt();
          let conversion = (obtenerAscii-122-offsetDecode)%26+122 ;
          let resultadoCifrado = String.fromCharCode(conversion);
          cifrado+=resultadoCifrado;
        }else{
            let resultadoCifrado = String (" ");
            cifrado+=resultadoCifrado;
        }
      }
    return cifrado
  }
}
