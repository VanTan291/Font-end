<template>
     <div class="row">
            <div class="col-sm-12">
                <h3>Them bai post</h3>
            <form @submit.prevent="updatePost()">
                <div class="form-group row">
                    <label for="" class="col-sm-5">Title</label>
                    <input type="title" class="form-control col-sm-7"  placeholder="Enter title" v-model="postEdit.title">
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                 <div class="form-group row">
                    <label for="" class="col-sm-5">image</label>
                    <img :src="'images/' + postEdit.image_full_path" class="img-responsive col-sm-2" height="70" width="90">
                    <div class="invalid-feedback" >

                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Content</label>
                    <textarea cols="70" rows="10" name="content" v-model="postEdit.content" class="col-sm-7"></textarea>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div> 

                <div class="form-group row">
                    <label for="" class="col-sm-5">Status</label>
                    <select name="status" v-model="postEdit.status">
                        <option value="1">Show</option>
                        <option value="0">Hide</option>
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