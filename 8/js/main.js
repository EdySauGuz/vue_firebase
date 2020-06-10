const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            {
                titulo: 'Tarea 1',
                completado: false
            },
            {
                titulo: 'Tarea 2',
                completado: false
            },
            {
                titulo: 'Tarea 3',
                completado: false
            },
            {
                titulo: 'Tarea 4',
                completado: false
            }
        ]
    },
    methods: {
        agregarTarea(){
            this.tareas.unshift({titulo: this.nuevaTarea, completado: false});
            this.nuevaTarea = null;
        },
        completarTarea(tarea){
            tarea.completado = !tarea.completado;
        }
    },
    computed: {
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.completado);
        }
    }
});



// // Vanilla Javascript
// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input);
//     input.value = '';
// }