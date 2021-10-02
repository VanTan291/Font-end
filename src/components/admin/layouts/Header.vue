<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
            <b v-if="name" class="text-danger float-right">{{ name }}</b>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
        </div>
        <button @click.prevent="logout" class="">Logout</button>  
    </nav>
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
        },
    }
}
</script>

<style>

</style>