<template>
    <div class="">
        <router-link :to="{ path: 'post-add' }"  tag="button" class="float-left btn-dark btn-sm mb-1">Add_post</router-link>
        <div class="table-responsive">
            <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>title</th>
                    <th>content</th>
                    <th>status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item, index) in listPost" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.content }}</td>
                    <td>{{ item.status }}</td>
                    <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
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