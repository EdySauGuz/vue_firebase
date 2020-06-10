// Vue.component('mis-tareas',{
//         props: ['tareas'],
//         template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`
//     }
// );

// new Vue({
//     el: 'main',
//     mounted(){
//         this.cargarTareas();
//     },
//     data: {
//         tareasAjax: [],
//     },
//     methods:{
//         cargarTareas(){
//             axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then((respuesta) => {
//                 this.tareasAjax = respuesta.data;
//             });
//         }
//     }
// });

Vue.component('mis-tareas',{
    template: `<ul><li v-for="tarea in tareas" v-text="tarea.title"></li></ul>`,
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareas = respuesta.data;
            });
    },
    data() {
        return{
            tareas: []
        }
    }
}
);

new Vue({
    el: 'main'
});