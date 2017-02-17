<template>
    <div id="view">
        <h1>{{ fullName }}</h1>
        <button @click="showDescription">Description</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                firstName: 'teste',
                lastName: 'Oliver',
                description: 'Comedian, political commentator and tv host.'
            }
        },
        computed: {
            fullName() {
                return `${ this.firstName } ${ this.lastName }`;
            }
        },
        methods: {
            showDescription() {
                alert(this.description)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    h4 {
        color: #42b983;
    }
</style>
