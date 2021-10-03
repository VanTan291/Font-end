<template>
  <div class="row">
    <h3 class="mb-5 mt-5">Đăng ký tài khoản</h3>
  
    <div class="col-sm-4"></div>
    <div class="col-sm-6">
      <form @submit.prevent="loginForm()">
          <div class="form-group row">
              <label for="name" class="col-sm-3 col-5">Tên đăng nhập</label>
              <input type="text" class="form-control col-sm-5 col-6" :class="{'is-invalid':  formValidate.name}" v-model="user.name" placeholder="vui lòng nhập tên đăng nhập" >
              <div class="invalid-feedback" v-if="formValidate.email">
                  {{ formValidate.email[0] }}
              </div>
          </div>
          <div class="form-group row">
              <label for="email" class="col-sm-3 col-5">gmail</label>
              <input type="email" class="form-control col-sm-5 col-6" :class="{'is-invalid':  formValidate.email}" v-model="user.email" placeholder="vui lòng nhập gmail" >
              <div class="invalid-feedback" v-if="formValidate.email">
                  {{ formValidate.email[0] }}
              </div>
          </div>
          <div class="form-group row">
              <label for="pwd" class="col-sm-3 col-5">Mật khẩu</label>
              <input type="password" class="form-control col-sm-5 col-6" v-model="user.password" :class="{'is-invalid':formValidate.password }" placeholder="vui lòng nhập mật khẩu">
              <div class="invalid-feedback" v-if="formValidate.password">
                  {{ formValidate.password[0] }}
              </div>
          </div> 
          <div class="form-group row mt-5">
              <button type="submit" class="btn btn-primary col-sm-2 ml-3 col-5">Đăng ký</button>
              <router-link :to="{ path: 'login' }"  tag="a" class="col-sm-2 mt-2 col-6">Đăng Nhập</router-link>
          </div>
      </form>
    </div>
    <div class="col-sm-2"></div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'register',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters(['formValidate'])
    },
    methods: {
        ...mapActions(['register']),
        reigisterForm() {
            this.register(this.user);
        }
    }
};
</script>

<style>
</style>