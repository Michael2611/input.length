const input = document.querySelector(".input");
contador = document.querySelector(".contador");

longitudMax = input.getAttribute("maxlength");

input.addEventListener("keyup", function (){

    /*Evitar ingreso de espacios en blancos*/
    let cadena = input.value;
    input.value = cadena.split(" ").join("");
    /*Fn*/
    
    contador.innerText = longitudMax - input.value.length;
    console.log(contador);
});