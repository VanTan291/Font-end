<template>
<div class="row pb-3">
    <div class="col-sm-12">
        <h1>{{ postDetail.title }}</h1>
        <img :src="'images/' + postDetail.image_full_path" class="img-responsive" height="700" width="80%">
        <p>{{ postDetail.content | stripHTML }}</p>
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
    },
    filters: {
      stripHTML(value) {
        const div = document.createElement('div', 'p')
        div.innerHTML = value
        const text = div.textContent || div.innerText || ''
        return text
      },
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