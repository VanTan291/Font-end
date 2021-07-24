<template>
    <div class="">doasboard
        <button v-on:click="logout()">Logout</button>
    </div>
</template>

<script>

import axios from '../config/api';
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.checkLogin();
    },
    methods: {
        checkLogin: function() {
            axios.get('user')
            .then((response) => {
                console.log(response)
            })
            .catch(() => {
               this.$router.push({name: 'login'});
            })
        },
        logout: function() {
            axios.post('logout')
            .then(() => {
                window.localStorage.removeItem('token');
                this.$router.push({
                    name: 'login'
                });
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>