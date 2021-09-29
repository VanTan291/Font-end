<template>
<div class="row pb-3">
    <div class="col-sm-12">
        <h1>{{ postDetail.title }}</h1>
        <img :src="'images/' + postDetail.image_full_path" class="img-responsive" height="700" width="100%">
        <p>{{ postDetail.content }}</p>
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
      
    },
    computed: {
        ...mapGetters(['postDetail'])
    },
    methods: {
        ...mapActions(['getPostPublic']),
    }
}
</script>

<style>

</style>