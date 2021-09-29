<template>
     <div class="row">
            <div class="col-sm-12">
                <h3>Them bai post</h3>
                <form @submit.prevent="addPost()">
                    <div class="form-group row">
                        <label for="" class="col-sm-5">Title</label>
                        <input type="title" class="form-control col-sm-7"  placeholder="Enter title" v-model="post.title">
                        <div class="invalid-feedback" >

                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="" class="col-sm-5">image</label>
                        <input type="file" v-on:change="onImageChange" class="form-control col-sm-7">
                        <div class="invalid-feedback" >

                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="" class="col-sm-5">Content</label>
                        <textarea cols="70" rows="10" name="content" v-model="post.content" class="col-sm-7"></textarea>
                        <div class="invalid-feedback" >
                            
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="" class="col-sm-5">Status</label>
                        <select name="status" v-model="post.status">
                            <option value="1">Show</option>
                            <option value="0" selected>Hide</option>
                        </select>
                        <div class="invalid-feedback" >
                            
                        </div>
                    </div>
                    <div class="form-group row float-right">
                        <button type="submit" class="btn btn-primary">Submit</button>
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