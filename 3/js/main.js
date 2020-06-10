const vm = new Vue({
    el: 'main',
    data: {
        semana_laboral: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
        tareas: [
            {nombre: 'Tarea 1', prioridad: 'alta'},
            {nombre: 'Tarea 2', prioridad: 'baja'},
            {nombre: 'Tarea 3', prioridad: 'alta'},
            {nombre: 'Tarea 4', prioridad: 'baja'}
        ],
        persona: {
            nombre: 'Eduardo Sauceda',
            fecha_nacimiento: '20/08/1996',
            ciudad_natal: 'Guadalajara'
        }
    }
});