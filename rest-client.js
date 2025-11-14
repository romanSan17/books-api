const vue = Vue.createApp({
    data() {
        return {gameInModal: {name:null}, games: []}
    },
    async created() {
        this.games = await (await fetch('http://localhost:8080/games')).json();
    },
    methods: {
        gerGame: async function () {
            this.gameInModal = await (await fetch('http://localhost:8080/games')).json();
            let gameInfoModal = new bootstrap.Modal(document.getElementById('gameInfoModal'), {})
            gameInfoModal.show();
        }
    }
}).mount('#app');