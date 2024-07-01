<?php 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>

    <!-- css -->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="app">
        <main>
            <section class="list-wrapper">
                <ul>
                    <li v-for="item in toDoList" class="todo-item">
                        {{ item.text }}
                    </li>
                </ul>
            </section>
            <section class="form-container">
                <form action="./src/utilities/post.php" method="GET">
                    <label for="toDoItem">
                        Inserisci cosa devi fare:
                    </label>
                    <input type="text" name="toDoItem" id="toDoItem" v-model="toAddItem">
                    <button type="submit">
                        Aggiungi
                    </button>
                </form>
            </section>
        </main>
    </div>
    
    <!-- axios -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.min.js" integrity="sha512-JSCFHhKDilTRRXe9ak/FJ28dcpOJxzQaCd3Xg8MyF6XFjODhy/YMCM8HW0TFDckNHWUewW+kfvhin43hKtJxAw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- vue3 -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <!-- script.js -->
    <script src="./js/script.js"></script>
</body>
</html>