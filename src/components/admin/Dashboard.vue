<template>
    <div class="">doasboard
        <button @click.prevent="logout">Logout</button>
        <b>{{name}}</b>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.checkLogin();
    },
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        ...mapActions(['checkLogin', 'logoutAdmin']),
        logout() {
            this.logoutAdmin();
        }

    }
}
</script>

<style>

</style>