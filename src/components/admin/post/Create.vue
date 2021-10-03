<template>
    <div class="row">
        <div class="col-sm-8">
            <h3 class="mb-5 mt-5 col-sm-3">Thêm bài viết</h3>
            <form @submit.prevent="addPost()">
                <div class="form-group row">
                    <label for="" class="col-sm-5">Tiêu đề </label>
                    <input type="title" class="form-control col-sm-7"  placeholder="Enter title" v-model="post.title">
                    <div class="invalid-feedback" >

                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Hình ảnh</label>
                    <input type="file" v-on:change="onImageChange" class="form-control col-sm-7">
                    <div class="invalid-feedback" >

                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Nội dung</label>
                    <textarea cols="70" rows="10" name="content" v-model="post.content" class="col-sm-7 form-control"></textarea>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Trạng thái</label>
                    <select name="status" v-model="post.status" class="col-sm-7">
                        <option value="1">hiện</option>
                        <option value="0" selected>ẩn</option>
                    </select>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                <div class="form-group row float-right">
                    <button type="submit" class="btn btn-primary">Lưu</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>


import { mapActions, mapGetters } from 'vuex'
export default {
data() {
        return {
            post: {
                title: '',
                content: '',
                status: 0,
                slide_url: ''
            }
        }
    },
    mounted() {
        this.checkLogin();
    },
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        ...mapActions(['checkLogin', 'logoutAdmin', 'postAdd']),
        logout() {
            this.logoutAdmin();
        },
        onImageChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            let vm = this;
            reader.onload = (e) => {
                vm.post.slide_url = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        addPost() {
           this.postAdd(this.post);
        }
        

    }
}
</script>

<style>

</style>