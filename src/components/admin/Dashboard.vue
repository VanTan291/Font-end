<template>
    
    <div class="">doasboard
        <button @click.prevent="logout" class="float-right">Logout</button>

        <div class="row mt-5">
            <div class="col-sm-12">
                <h3>Them bai post</h3>
            <form>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Title</label>
                    <input type="title" class="form-control col-sm-7"  placeholder="Enter title" >
                    <div class="invalid-feedback" >
                        
                    </div>
                </div>
                <div class="form-group row">
                    <label for="" class="col-sm-5">Content</label>
                    <textarea cols="70" rows="10" name="content"></textarea>
                    <div class="invalid-feedback" >
                        
                    </div>
                </div> 

                <div class="form-group row">
                    <label for="" class="col-sm-5">Status</label>
                    <select name="status">
                        <option>Status post</option>
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
        ...mapGetters(['name'])
    },
    methods: {
        ...mapActions(['checkLogin', 'logoutAdmin']),
        logout() {
            this.logoutAdmin();
        }

    }
}
</script>

<style>

</style>