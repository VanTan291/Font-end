<template>
    <div class="row container">
        <div class="col-sm-12">
            <form @submit.prevent="loginForm()">
                <div class="alert alert-danger" role="alert" v-if="errors.fail" >
                    {{errors['fail']}}
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2">Email address:</label>
                    <input type="email" class="form-control col-sm-5" :class="{'is-invalid': errors.email }" v-model="user.email" placeholder="Enter email" >
                    <div class="invalid-feedback" v-if="errors.email">
                        {{errors.email[0]}}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-2">Password:</label>
                    <input type="password" class="form-control col-sm-5" v-model="user.password" :class="{'is-invalid': errors.password}" placeholder="Enter password">
                    <div class="invalid-feedback" v-if="errors.password">
                        {{errors.password[0]}}            
                    </div>
                </div>
                <div class="form-group row">
                    <button type="submit" class="btn btn-primary col-sm-2">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            errors: {},
        }
    },
    methods: {
        loginForm: function() {
            axios.post('http://localhost:8088/api/login/', this.user)
            .then((response) => {
                window.localStorage.setItem('token', response.data.token);
                this.$router.push({
                    name: 'dashboard'
                });
            })
            .catch((error) => {
                if (error.response.data.errors) {
                    this.errors = error.response.data.errors;
                } else {
                    this.errors['fail'] = error.response.data.fail;
                    console.log(this.errors['fail']);
                }
            })
        }
    }
}
</script>

<style>

</style>