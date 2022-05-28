/*
 * ESTA ES UNA ESTRUCTURA DE JS LLAMADA CLOUSURE:
 * ES UNA FUNCIÓN DENTRO DE OTRA FUNCIÓN
 * */

const Contador = function() {
    const total = 0;
    return {
        total,
        increment: function(){
            this.total += 1;
        },
        getContador: function(){
            return this.total;
        },
        decrement: () => {
            this.total -=1;
        }
    }
};

const contador = Contador();
contador.increment();
console.log('INCREMENT: ', contador.getContador());
contador.decrement()
console.log('DECREMENT', contador.getContador());

/**
 * ESTO PASA PORQUE LA FUNCIÓN CON FLECA NO TE PERMITE CONOCER EL CONTEXTO A COMPARACIÓN
 * DE LA FUNCIÓN ANÓNIMA. RECORDEMOS QUE TODA FUNCION SIN NOMBRE ES ANONIMA SI NO TIENE NOMBRE
 * POR ULTIMO ESTAS CLOUSURES SE USABAN MUCHO PARA PODER HACER METODOS O VARIABLES PRIVADOS
 **/

 // ==========================================================================================

 /**
 * EJERCICIO:::
 * REALIZAR UNA CLOUSRE PARA PODER CREAR UN USUARIO, DONDE EL METODO PUBLICO SERÁ REGISTRAR USUARIO
 * EL METODO PRIVADO SERÁ LA CREACIÓN UNICA DEL ID.
 **/