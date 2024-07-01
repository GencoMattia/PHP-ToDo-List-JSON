const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [],
            toAddItem: "",
        }
    },

    methods: {
        getToDoList() { 
            axios.get('./db/toDoList.json', {
                params: {
                    
                }
            })
            .then((response) => {
                console.log(response);
                this.toDoList = response.data;
            })
            .catch(function(error) {
                console.error("Errore durante il recupero della lista:", error);
            })
        },   

        addItem() {
            if(this.toAddItem.trim() !== "") {
                toDoList.push({
                    text: this.toAddItem,
                    isDone: false,
                })
            }
        }
    },

    mounted() {
        this.getToDoList();
    }
}).mount('#app')