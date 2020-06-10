const vm1 = new Vue({
    el: 'main',
    data: {
        mensaje: "Instancia Vue 1"
    },
    beforeUpdate(){
        console.log("beforeUpdate: "+ this.mensaje);
    },
    updated(){
        console.log("updated: "+ this.mensaje);
    },
    methods: {
        alReves(){
            this.mensaje = this.mensaje.split('').reverse().join('');
            // vm2.mensaje = "Asignaci&oacute;n desde Vue 1";
        }
    },
    computed: {
        mensajeMayuscutal(){
            return this.mensaje.toUpperCase();
        }
    }
});

const vm2 = new Vue({
    el: '#app',
    data: {
        mensaje: "InstanciaVue 2"
    }
});