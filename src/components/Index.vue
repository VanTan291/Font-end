<template>
<div class="row">
    <div class="col-sm-3 col-12"  v-for="item in listPost" :key="item.id">
        <a v-on:click.once="postDetail(item.id)">
        <div class="card mt-2" style="height: 25rem">
            <img :src="'images/' + item.image_full_path" class="img-responsive card-img-top" height="200">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">{{ item.content | strLimit(50) }}</p>
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
    },
    filters: {
      strLimit(value, size) {
        if (!value) return '';
        value = value.toString();

        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + '...';
      },
    }
}
</script>

<style>

</style>