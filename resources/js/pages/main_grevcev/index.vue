<template>
    <v-container>
        <v-col>
            <v-btn
                color="success"
                @click="startSave()"> 
                    Hello
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
            this.axios.get("start-method", {
                params: {
                    user: 'Алексей',
                    email: 'tas_devil@rambler.ru',
                    city: 'Ставрополь',
                    street: 'Ленина',
                    house: '167',
                }
            })
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
