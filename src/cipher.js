window.cipher = {
  // ...
  encode: (offset, string) => {

    
  
    
    console.log(offset, string);
    return string
  }
}



















    /*  x - 65 + n ) % 26 + 65*/
    /* //funcion Cipher
function cipher(text){
  //para guardar las letras del nuevo texto
  var textCipher = "";
  //recorriendo el texto ingresado
  for(var i = 0; i<text.length; i++){
   //averiguando el codigo ASCII de las letras y aplicando la formula
   var textChar = (text.charCodeAt(i) - 65 + 33)%26 + 65;
   //convirtiendo el texto cifrado al cod. ASCII
   textCipher += String.fromCharCode(textChar);
 }
 //retornando el valor
 return textCipher;
}*/

    /*function mjs(){
    let mensajeObtenido=mensaje.value;
    let mayuscula= mensajeObtenido.toUppercase();
    let mayus= mayuscula.chartCodeAt();

    for(let i=0; i<mayuscula.length; i++){
      let letraAscii=mayuscula.charCodeAt(i);
      let formula=(letraAscii-65+offset)%26+65;
      let resultado= string.formCharcode(formula);
      nuevoCifrado+=resultado;
    }
    document.write(nuevoCifrado);
  }*/

  

  
  