<template>
<div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light"><img :src="'logo/logo1.png'" class="img-responsive" width="150" height="100"></div>
    <div class="list-group list-group-flush">
        <router-link 
            :to="{ path: 'dashboard' }"  
            tag="a" 
            :class="$route.path == '/dashboard' ? 
            'list-group-item list-group-item-action list-group-item-light p-3 active' : 
            'list-group-item list-group-item-action list-group-item-light p-3' ">
        Dashboard
        </router-link>
        <router-link 
            :to="{ path: 'post' }"  
            tag="a"  
            :class="$route.path == '/post' ? 
            'list-group-item list-group-item-action list-group-item-light p-3 active' : 
            'list-group-item list-group-item-action list-group-item-light p-3' ">
        Quản lý bài viết
        </router-link>
    </div>
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
        },
    }
}
</script>

<style>

</style>