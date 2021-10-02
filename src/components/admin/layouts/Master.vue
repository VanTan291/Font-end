<template>

    <div class="row">
        <div class="col-sm-12">
        <Header />
        </div>
        <div class="col-sm-2 border-right">
            <LeftBar />
        </div>
        <div class="col-sm-10">
             <div class="row">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import Header from './Header.vue'
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
       Header,
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