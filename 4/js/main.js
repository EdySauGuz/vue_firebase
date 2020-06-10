const vm = new Vue({
    el: 'main',
    data: {
        nuevaTarea: null,
        tareas: [
            'Tarea 1',
            'Tarea 2',
            'Tarea 3',
            'Tarea 4'
        ]
    },
    methods: {
        agregarTarea(){
            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea = null;
        }
    }
});



// // Vanilla Javascript
// function agregarTarea(){
//     const input = document.querySelector('input[type=text]');
//     vm.tareas.unshift(input);
//     input.value = '';
// }