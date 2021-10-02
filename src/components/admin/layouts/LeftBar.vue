<template>
<ul class="nav nav-pills flex-column">
    <li class="nav-item">
        <router-link :to="{ path: 'dashboard' }"  tag="a" class="nav-link">Dashboard</router-link>
    </li>
    <li class="nav-item">
        <router-link :to="{ path: 'post' }"  tag="a" class="nav-link">post</router-link>
    </li>
</ul>
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