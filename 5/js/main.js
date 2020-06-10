const vm = new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola',
        tareas: [
            {actividad: 'Tarea 1', prioridad: true},
            {actividad: 'Tarea 2', prioridad: false},
            {actividad: 'Tarea 3', prioridad: true},
            {actividad: 'Tarea 4', prioridad: false}
        ]
    },
    computed: {
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        },
        tareasOrdenadas(){
            return this.tareas.sort((a,b) => (a === b)? 0 : a? -1 : 1);
        }

    }
});