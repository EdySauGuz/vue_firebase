Vue.filter('AlReves',(valor) => valor.split('').reverse().join(''));

const vm = new Vue({
    el: 'main',
    data: {
        busqueda: "",
        minimo: 5,
        juegos: [
            {
                titulo: 'Juego 1', 
                genero: 'Accion',
                puntuacion: 9
            },
            {
                titulo: 'Juego 2', 
                genero: 'Terror',
                puntuacion: 7
            },
            {
                titulo: 'Juego 3', 
                genero: 'Aventura',
                puntuacion: 5
            },
            {
                titulo: 'Juego 4', 
                genero: 'Carreras',
                puntuacion: 4
            }
        ]
    },
    computed: {
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        busquedaJuegos(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        }
    }
});