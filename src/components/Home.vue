<template>
    <div class="jumbotron">
        <todo></todo>
        <md-button class="md-icon-button md-raised">
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-primary">
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-accent">
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-warn">
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised" disabled>
            <md-icon>add</md-icon>
        </md-button>

        <md-button class="md-icon-button md-raised md-dense">
            <md-icon>add</md-icon>
        </md-button>
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