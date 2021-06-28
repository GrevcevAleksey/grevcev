<template>
    <v-app>
    <!-- <div id="app"> -->
        <MainGrevcev></MainGrevcev>
        <!-- <main-grevcev></main-grevcev> -->
    <!-- </div> -->
    </v-app>
</template>

<script>
    import MainGrevcev from './pages/main_grevcev';
    export default {
        components: {
            MainGrevcev,
        },
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>