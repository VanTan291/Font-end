<template>
    <div class="">doasboard</div>
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
        }
    }
}
</script>

<style>

</style>