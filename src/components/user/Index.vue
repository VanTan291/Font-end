<template>
    <div class="row">
        <div class="col-sm-2 col-12 mt-5"  v-for="item in listPost" :key="item.id">
            <a v-on:click.once="postDetail(item.id)">
                <div class="card">
                    <img :src="item.image_full_path" class="img-responsive card-img-top" height="100">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
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
        ...mapGetters(['listPost', 'name'])
    },
    methods: {
        ...mapActions(['getPostPublic', 'getPostDetail', 'logoutAdmin']),
        postDetail(id) {
            this.getPostDetail(id);
        },
        logout() {
            this.logoutAdmin();
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