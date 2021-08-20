<template>
    <div class="">
        <router-link :to="{ path: 'post-add' }"  tag="button" class="float-left btn-dark btn-sm mb-1">Add_post</router-link>
        <div class="table-responsive">
            <table class="table table-bordered table-hover">
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
                    <td>
                        <span class="badge badge-success" v-if="item.status == 1"> {{ active  }}</span>
                        <span class="badge badge-secondary" v-if="item.status == 0">{{ inActive }}</span>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-warning float-left" v-on:click.once="getPostById(item.id)">edit</button>
                        <button class="btn btn-sm btn-danger float-right">delete</button>
                    </td>
                </tr>
            </tbody>
            
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
           active: 'Active',
           inActive: 'In Active',
        }
    },
    mounted() {
        this.getPost();
    },
    computed: {
        ...mapGetters(['listPost'])
    },
    methods: {
        ...mapActions(['getPost', 'getPostEditById']),
        getPostById(id) {
            this.getPostEditById(id);
        }
    }
}
</script>

<style>

</style>