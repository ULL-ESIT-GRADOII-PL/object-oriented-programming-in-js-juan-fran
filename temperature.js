"use strict"

function Medida(val,tipo){
    var valor;
    var tipo;
}

function Temperatura(){
  Medida.call(this);
}

//Temperatura hereda de medida
Temperatura.prototype = Object.create(Medida.prototype);

function Celcius(){
  Temperatura.call(this);
}

function Farenheit(){

}

function Kelvin(){

}

//C, F y K heredan de Temperatura
Celcius.prototype = Object.create(Temperatura.prototype);
Farenheit.prototype = Object.create(Temperatura.prototype);
Kelvin.prototype = Object.create(Temperatura.prototype);
