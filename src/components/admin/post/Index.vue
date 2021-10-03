<template>
    <div class="col-sm-12 mt-2">
        <h3>Danh sách bài viết</h3>
        <div class="alert alert-success alert-dismissible" v-if="message">
            <button type="button" class="close" data-dismiss="alert"  v-on:click="message = ''">&times;</button>
            <strong>{{ message }}!</strong>
        </div>
        <router-link :to="{ path: 'post-add' }"  tag="button" class="float-left btn-dark btn-sm mb-1">Thêm</router-link>
        <div class="table-responsive p-0 no-padding">
            <table class="table table-bordered table-hover text-nowrap">
                <thead>
                    <tr role="row" >
                        <th>#</th>
                        <th>Hình ảnh</th>
                        <th>Tiêu đề</th>
                        <th>Nội dung</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in listPost" :key="index" role="row">
                        <td>{{ index+1 }}</td>
                        <td> <img :src="item.image_full_path" class="img-responsive" height="70" width="90"> </td>
                        <td>{{ item.title | strLimit(20) }}</td>
                        <td>{{  item.content | strLimit(50)}}</td>
                        <td>
                            <span class="badge badge-success" v-if="item.status == 1">Hiện</span>
                            <span class="badge badge-secondary" v-if="item.status == 0">Ẩn</span>
                        </td>
                        <td>
                            <button class="btn btn-sm btn-warning mr-1" v-on:click.once="getPostById(item.id)">Sửa</button>
                            <button class="btn btn-sm btn-danger" v-on:click.once="deletePost(item.id)">Xóa</button>
                        </td>
                    </tr>
                    <tr  v-if="listPost == ''">
                        <td colspan="6">Không có dữ liệu</td>
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
.table thead th {
    vertical-align: bottom;
    border-bottom: 1px solid #dee2e6 !important;
}

.table-bordered {
    border-color:lightgray !important;
}
</style>