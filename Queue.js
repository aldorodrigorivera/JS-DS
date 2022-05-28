/*
 * ESTA ES UNA ESTRUCTURA DE DATOS LLAMADA QUEUE:
 * UNA QUEUE SE PODRÍA DEFINIR COMO UN ARRAY CON CIERTAS CARACTERÍSTICAS PRINCIPALES
 * REGLA::::EL PRIMERO QUE ENTRA EL PRIMERO QUE SALE ::::
 * PROVEDORES :::: RABBIT_MQ, KAFKA, ETC
 * */


const Queue = function() {
    return {
        data: [],
        enqueue: function(item) {
            this.data.push(item);
        },
        dequeue: function(){
            this.data.shift();
        },
        print: function(){
            console.log("================================")
            this.data.map((item) => console.log(item))
            console.log("================================")
        }
    }
}

const queue = new Queue();
queue.enqueue("Primis");
queue.enqueue("Seguns");
queue.enqueue("Tercis");
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();

/*
 * EN ESTE EJERCICIO  DEBES ENCOLAR LOS MENSAJES "PRIMIS", "SEGUNS", "TERCIS".
 * HACIENDO USO DEL TIMER (setInterval) CADA 3 SEGUNDOS SACAR UN ELEMENTO DE LA COLA.
 * */


