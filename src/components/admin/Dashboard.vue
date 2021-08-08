<template>
    
    <div class="row">
        <div class="col-sm-12 bg-secondary p-3">
            <button @click.prevent="logout" class="float-right">Logout</button>
            <b v-if="name" class="text-danger float-right">{{ name }}</b>
        </div>
        <div class="col-sm-3 border-right">
            <ul class="nav flex-column float-left p-3">
                <li class="nav-item">
                    <router-link :to="{ path: 'post' }"  tag="a">post</router-link>
                </li>
            </ul>
        </div>
        <div class="col-sm-9">
             <div class="row mt-5">
                <div class="col-sm-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>

import { mapActions, mapGetters } from 'vuex'
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