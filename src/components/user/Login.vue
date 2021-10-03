<template>
    <div class="row">
        <h3 class="mb-5 mt-5">Đăng nhập</h3>
        <div class="alert alert-success alert-dismissible" v-if="message">
            <button type="button" class="close" data-dismiss="alert"  v-on:click="message = ''">&times;</button>
            <strong>{{ message }}!</strong>
        </div>
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
            <form @submit.prevent="loginForm()">
                <b v-if="formValidate"> {{ formValidate['fail'] }}</b>
                <div class="form-group row">
                    <label for="email" class="col-sm-3 col-3">gmail</label>
                    <input type="email" class="form-control col-sm-5 col-8" :class="{'is-invalid':  formValidate.email}" v-model="user.email" placeholder="vui lòng nhập gmail" >
                    <div class="invalid-feedback" v-if="formValidate.email">
                       {{ formValidate.email[0] }}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-3 col-3">Mật khẩu</label>
                    <input type="password" class="form-control col-sm-5 col-8" v-model="user.password" :class="{'is-invalid':formValidate.password }" placeholder="vui lòng nhập mật khẩu">
                    <div class="invalid-feedback" v-if="formValidate.password">
                        {{ formValidate.password[0] }}
                    </div>
                </div> 
                <div class="form-group row">
                    <div class="col-sm-1 col-1"></div>
                    <button type="submit" class="btn btn-primary col-sm-2 col-6">Đăng nhập</button>
                    <router-link :to="{ path: 'register' }"  tag="a" class="col-sm-2 mt-2 col-5">Đăng ký</router-link>
                </div>
            </form>
            
        </div>
        <div class="col-sm-3"></div>
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
            },
            message: ''

        }
    },
    mounted() {
        this.message = this.success;
    },
    computed: {
        ...mapGetters(['formValidate', 'success'])
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