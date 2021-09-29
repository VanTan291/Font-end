<template>
<div class="row pb-3">
    <div class="col-sm-4"  v-for="item in listPost" :key="item.id">
        <a v-on:click.once="postDetail(item.id)">
        <div class="card mt-2" style="width: 18rem;">
            <img :src="'images/' + item.image_full_path" class="img-responsive card-img-top" height="200">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.content.length > 50 ?  item.content.substr(0,50)+ '...' : item.content }}</p>
            </div>
        </div>
        </a>
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
        this.getPostPublic();
    },
    computed: {
        ...mapGetters(['listPost'])
    },
    methods: {
        ...mapActions(['getPostPublic', 'getPostDetail']),
        postDetail(id) {
            this.getPostDetail(id);
        },
    }
}
</script>

<style>

</style>