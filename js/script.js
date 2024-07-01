const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
        }
    },

    methods: {
        getToDoList() { 
            axios.get('../json/toDoList.json', {
                params: {
                    
                }
            })
            .then(response => {
                this.toDoList = response.data;
            })
            .catch(error => {
                console.error("Errore durante il recupero della lista:", error);
            })
        }   
    },

    mounted() {
        this.getToDoList();
    }
}).mount('#app')