<template>
<div class="row">
    <div class="col-sm-4"  v-for="item in listPost" :key="item.id">
        <div class="card mt-2">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.content }}</p>
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
           
        }

    },
    mounted() {
        this.getPost();
    },
    computed: {
        ...mapGetters(['listPost'])
    },
    methods: {
        ...mapActions(['getPost']),
    }
}
</script>

<style>

</style>