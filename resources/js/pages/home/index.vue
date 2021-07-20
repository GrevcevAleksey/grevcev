<template>
    <v-container>
        <v-col>
            <v-btn
                color="success"
                @click="startSave()"> 
                    Войти
            </v-btn>
        </v-col>
    </v-container>
</template>
<script>
import {
    VContainer,
    VCol,
    VBtn,
} from "vuetify/lib/components";

export default {
    components: {
        VContainer,
        VCol,
        VBtn, 
    },
    methods: {
        startSave() {
            this.$router.push({ name: 'login' })
            // this.axios.get('start-method')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            }) 
        }
    }
}

</script>
