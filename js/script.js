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
                axios.get("./src/utilities/post.php", {
                    params: {
                        text: this.toAddItem,
                        isDone: false,
                    }
                })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                })
            }
        }
    },

    created() {
        this.getToDoList();
    }
}).mount('#app')