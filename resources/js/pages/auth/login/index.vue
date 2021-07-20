<template>
    <v-container style="max-width: 400px" fill-height>
        <v-row
            align="center"
            justify="center">
            <v-col cols="12">
                <h2 align="center">Авторизация</h2>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    label="Логин"
                    v-model="login"
                    prepend-icon="mdi-account"
                    prepend-icon-right
                    hint="Введите логин"
                    outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    name="password"
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
            <v-col>
                <v-btn
                    class="mx-auto py-7 px-3"
                    color="blue darken-1"
                    :disabled="send"
                    :loading="send"
                    style="width: 170px"
                    :dark="!send"
                    @click="signIn()"
                >
                    <span>Войти</span>
                    <v-icon>mdi-login-variant</v-icon>
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    class="mx-auto py-7 px-3"
                    color="success"
                    style="width: 170px"
                    @click="register()"
                >
                    <span>Регистрация</span>
                    <v-icon>mdi-account-plus-outline</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
            login: "",
            password: {
                flag: false,
                value: "",
            },
            send: false,
            };
        }, 
        methods: {
            signIn() {
            this.send = true;
            this.axios.post('auth/login', {
                email:this.login,
                password:this.password.value,
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
            register() {
                this.$router.push({ name: 'register' });
            }
        },
    }
</script>