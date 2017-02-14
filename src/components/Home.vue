<template>
    <div class="jumbotron">
        <todo></todo>
    </div>
</template>

<script>
    import Hello from './Hello.vue'
    import Todo from './todo/Todo.vue'
    export default {
        components: {
            Hello,
            Todo
        }
    }
</script>