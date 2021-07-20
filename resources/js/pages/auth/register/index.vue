<template>
    <v-container style="max-width: 400px" fill-height>
        <v-row
            align="center"
            justify="center">
            <v-col cols="12">
                <h2 align="center">Регистрация</h2>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Имя"
                    v-model="name"
                    prepend-icon="mdi-account"
                    prepend-icon-right
                    hint="Введите имя"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Почта"
                    v-model="email"
                    prepend-icon="mdi-account"
                    prepend-icon-right
                    hint="Введите email"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Пароль"
                    v-model="password.value"
                    prepend-icon="mdi-lock"
                    hint="Введите пароль"
                    :type="password.flag ? 'text' : 'password'"
                    :append-icon="password.flag ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="password.flag = !password.flag"
                    outlined
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Подтвердите пароль"
                    v-model="password_confirmation.value"
                    prepend-icon="mdi-lock"
                    hint="Введите пароль повторно"
                    :type="password_confirmation.flag ? 'text' : 'password'"
                    :append-icon="password_confirmation.flag ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="password_confirmation.flag = !password_confirmation.flag"
                    outlined
                    counter
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-btn
                    class="mx-auto py-7 px-3"
                    color="success"
                    :disabled="send"
                    :loading="send"
                    :dark="!send"
                    @click="register()"
                >
                    <span>Сохранить</span>
                    <v-icon>mdi-account-check</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: {
                flag: false,
                value: "",
            },
            password_confirmation: {
                flag: false,
                value: "",
            },
            send: false,
        };
    },
    methods: {
        register() {
        this.send = true;
        this.axios.post('auth/register', {
            name:this.name,
            email:this.email,
            password:this.password.value,
            password_confirmation:this.password_confirmation.value,
        })
            .then(response => {
                console.log(response);
            })
            .catch(errors => {
                console.log(errors);
            })
            .finally(() => {
                console.log('finaly');
                this.send = false;
            });
        },
    },
}
</script>
 