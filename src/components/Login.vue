<template>
    <div class="row container">
        <div class="col-sm-12">
            <form @submit.prevent="loginForm()">
                <b v-if="formValidate"> {{ formValidate['fail'] }}</b>
                <div class="form-group row">
                    <label for="email" class="col-sm-2">Email address:</label>
                    <input type="email" class="form-control col-sm-5" :class="{'is-invalid':  formValidate.email}" v-model="user.email" placeholder="Enter email" >
                    <div class="invalid-feedback" v-if="formValidate.email">
                       {{ formValidate.email[0] }}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-2">Password:</label>
                    <input type="password" class="form-control col-sm-5" v-model="user.password" :class="{'is-invalid':formValidate.password }" placeholder="Enter password">
                    <div class="invalid-feedback" v-if="formValidate.password">
                        {{ formValidate.password[0] }}
                    </div>
                </div> 
               
                <div class="form-group row">
                    <button type="submit" class="btn btn-primary col-sm-2">Submit</button>
                </div>

                <router-link :to="{ path: 'register' }"  tag="a">Register</router-link>
            </form>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters(['formValidate'])
    },
    methods: {
        ...mapActions(['login']),
        loginForm() {
            this.login(this.user);
        }
    }
}
</script>

<style>

</style>