<template>
    <v-app>
        <div id="app">
            <Home></Home>
        </div>
    <router-view />
    </v-app>
</template>

<script>
    import Home from './pages/home';
    export default {
        components: {
            Home,
        },
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>