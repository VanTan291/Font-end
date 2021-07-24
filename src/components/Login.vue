<template>
    <div class="row container">
        <div class="col-sm-12">
            <form @submit.prevent="loginForm()">
                <div class="form-group row">
                    <label for="email" class="col-sm-2">Email address:</label>
                    <input type="email" class="form-control col-sm-5" v-model="user.email" placeholder="Enter email" id="email">
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-2">Password:</label>
                    <input type="password" class="form-control col-sm-5" v-model="user.password" placeholder="Enter password" id="pwd">
                </div>
                <div class="form-group row">
                    <button type="submit" class="btn btn-primary col-sm-2">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

// import Api from "./config/api.js";
import axios from 'axios';
export default {
    name: 'login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            errors: {}
        }
    },
    methods: {
        loginForm: function() {
            axios.post('http://localhost:8088/api/login/', this.user)
            .then((response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>