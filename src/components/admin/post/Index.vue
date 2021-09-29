<template>
    <div class="col-sm-12">
        <div class="alert alert-success alert-dismissible" v-if="message">
            <button type="button" class="close" data-dismiss="alert"  v-on:click="message = ''">&times;</button>
            <strong>{{ message }}!</strong>
        </div>
        <router-link :to="{ path: 'post-add' }"  tag="button" class="float-left btn-dark btn-sm mb-1">Add_post</router-link>
        <div class="table-responsive p-0 no-padding">
            <table class="table table-bordered table-hover text-nowrap">
                <thead>
                    <tr role="row" >
                        <th>#</th>
                        <th>image</th>
                        <th>title</th>
                        <th>content</th>
                        <th>status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(item, index) in listPost" :key="index" role="row">
                        <td>{{ index+1 }}</td>
                        <td> <img :src="'images/' + item.image_full_path" class="img-responsive" height="70" width="90"> </td>
                        <td>{{ item.title | strLimit(20) }}</td>
                        <td>{{  item.content | strLimit(50)}}</td>
                        <td>
                            <span class="badge badge-success" v-if="item.status == 1"> {{ active  }}</span>
                            <span class="badge badge-secondary" v-if="item.status == 0">{{ inActive }}</span>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-warning mr-1" v-on:click.once="getPostById(item.id)">edit</button>
                            <button class="btn btn-sm btn-danger" v-on:click.once="deletePost(item.id)">delete</button>
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
           message: ''
        }
    },
    mounted() {
        this.getPost();
        this.message = this.successful;
    },
    computed: {
        ...mapGetters(['listPost', 'successful'])
    },
    methods: {
        ...mapActions(['getPost', 'getPostEditById', 'removePostById']),
        getPostById(id) {
            this.getPostEditById(id);
        },
        deletePost(id) {
            this.removePostById(id);
        }
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