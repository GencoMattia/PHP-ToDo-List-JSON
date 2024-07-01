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
            axios.get("./src/utilities/get.php", {
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

    beforeMount() {
        this.getToDoList();
    }
}).mount('#app')