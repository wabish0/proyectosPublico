

let NumeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;



function AsignarTextosElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function VerificadorIntento() {
    let NumeroDeUsuario = parseInt(document.getElementById('ValorUsuario').value);

    
    if (NumeroDeUsuario ===  NumeroSecreto) {
        AsignarTextosElemento('p', `Felicidades! , acertaste en ${numeroIntentos} ${(numeroIntentos == 1) ?'vez' : 'veces' }` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if (NumeroSecreto > NumeroDeUsuario) {
            AsignarTextosElemento('p','El numero es mayor ');
        }else{
            AsignarTextosElemento('p', 'El numero es menor');
        }
        numeroIntentos++;
        LimpiarCaja();
    }
}



function LimpiarCaja(params) {
   let ValorCaja = document.querySelector('#ValorUsuario').value = '';
}

function GenerarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        AsignarTextosElemento('p','Ya se sortearon todos los numeros posibles ')
    } else {
         //si el nuemro generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return GenerarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}

function condicionesIniciales() {
    AsignarTextosElemento('h1' , 'Juego del numero secreto!');
    AsignarTextosElemento('p' , `Selecciona un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    numeroIntentos = 1;

}

function ReiniciarJuego() {
    //limpiar caja
    LimpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
}

condicionesIniciales();





