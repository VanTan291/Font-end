<template>
    <div class="row container">
        <div class="col-sm-12">
            <form @submit.prevent="loginForm()">
                <!-- <div class="alert alert-danger" role="alert" v-if="message.fail" >
                    {{message['fail']}}
                </div> -->
                 {{message}}
                <div class="form-group row">
                    <label for="email" class="col-sm-2">Email address:</label>
                    <input type="email" class="form-control col-sm-5" :class="{'is-invalid': message }" v-model="user.email" placeholder="Enter email" >
                    <div class="invalid-feedback" v-if="message">
                        {{message.email[0]}}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-2">Password:</label>
                    <input type="password" class="form-control col-sm-5" v-model="user.password" :class="{'is-invalid': message}" placeholder="Enter password">
                    <div class="invalid-feedback" v-if="message">
                        {{message.password[0]}}      
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
        ...mapGetters(['message'])
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