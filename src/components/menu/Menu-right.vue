<template>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('leftSidenav')" @close="close('leftSidenav')" >
        <md-toolbar class="md-account-header">
            <md-avatar class="md-large">
                <img src="https://placeimg.com/64/64/people/1" alt="People">
            </md-avatar>
        </md-toolbar>

        <md-list>
            <md-list-item @click.native="$refs.sidenav.toggle()" class="md-primary">
                <md-icon>insert_drive_file</md-icon>
                <span>My files</span>
            </md-list-item>

            <md-list-item @click.native="$refs.sidenav.toggle()">
                <md-icon>people</md-icon>
                <span>Shared with me</span>
            </md-list-item>

            <md-list-item @click.native="$refs.sidenav.toggle()">
                <md-icon>access_time</md-icon>
                <span>Recent</span>
            </md-list-item>

            <md-list-item @click.native="$refs.sidenav.toggle()">
                <md-icon>start</md-icon>
                <span>Starred</span>
            </md-list-item>

            <md-list-item @click.native="$refs.sidenav.toggle()">
                <md-icon>delete</md-icon>
                <span>Trash</span>
            </md-list-item>
        </md-list>
    </md-sidenav>

</template>


<script>



    export default {
        name: 'menu-right',
        methods: {
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            },
            toggleLeMenu() {
                //this.leftSidenav.toggle();
                this.$refs.leftSidenav.toggle();
            },
            increment: function () {
                console.log("tight menu");
            }

        }
    };
</script>