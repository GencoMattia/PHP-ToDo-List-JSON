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
            .then((response) => {
                console.log(response);
                // this.toDoList = response.data;
            })
            .catch(function(error) {
                console.error("Errore durante il recupero della lista:", error);
            })
        }   
    },

    mounted() {
        this.getToDoList();
    }
}).mount('#app')