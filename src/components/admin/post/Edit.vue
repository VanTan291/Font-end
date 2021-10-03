<template>
    <div class="row">
        <div class="col-sm-7">
            <h3 class="mb-5 mt-5 col-sm-3">Sửa bài viết</h3>
            <form @submit.prevent="updatePost()">
                <div class="form-group row">
                    <label for="" class="col-sm-5">Tiêu đề</label>
                    <input type="title" class="form-control col-sm-7"  placeholder="Enter title" v-model="postEdit.title">
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                    <div class="form-group row">
                    <label for="" class="col-sm-5">Hình ảnh</label>
                    <img :src="postEdit.image_full_path" class="img-responsive col-sm-7" height="100" width="100">
                    <div class="invalid-feedback" >

                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Nội dung</label>
                    <textarea cols="70" rows="10" name="content" v-model="postEdit.content" class="col-sm-7 form-control"></textarea>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div> 

                <div class="form-group row">
                    <label for="" class="col-sm-5">Trạng thái</label>
                    <select name="status" v-model="postEdit.status" class="col-sm-2">
                        <option value="1">hiện</option>
                        <option value="0">ẩn</option>
                    </select>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                
                <div class="form-group row float-right">
                    <button type="submit" class="btn btn-primary">Lưu</button>
                </div>
            </form>
        </div>
        <div class="col-sm-5"></div>
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
        this.checkLogin();
    },
    computed: {
        ...mapGetters(['name', 'postEdit'])
    },
    methods: {
        ...mapActions(['checkLogin', 'logoutAdmin', 'updatePostById', 'getPostEditById']),
        logout() {
            this.logoutAdmin();
        },
        updatePost() {
            this.updatePostById(this.postEdit);
        }
    }
}
</script>

<style>

</style>