jugar = function(){
    let valorRecuperado;
    valorRecuperado = lanzarDado();
    cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado >=6){
        cambiarTexto("lblNumero","Ganaste")
    } else {
        cambiarTexto("lblNumero","Sigue intentado" + ": " + valorRecuperado)
    }
};

//Crear una funcion llamada lanzar dado no recibe parametros, retonor un numero aletorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMulti;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMulti = aleatorio * 6;
    numeroEntero = parseInt(numeroMulti);
    valorDado = numeroEntero + 1;
    //console.log(valorDado);
    return valorDado;
};