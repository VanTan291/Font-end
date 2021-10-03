<template>
    <div class="d-flex" id="wrapper">
        <!-- Sidebar-->
        <LeftBar />
        <!-- Page content wrapper-->
        <div id="page-content-wrapper">
            <!-- Top navigation-->
            <TopNavar />
            <!-- Page content-->
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import TopNavar from './TopNavar.vue'
import LeftBar from './LeftBar.vue'

export default {
    data() {
        return {
            post: {
                title: '',
                content: '',
                status: 0,
            }
        }
    },
    components: {
       TopNavar,
       LeftBar
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