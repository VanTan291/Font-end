<template>
  <div class="col-md-8">
    <div class="card">
      <div class="card-header">Register</div>
      <div class="card-body">
        <form @submit.prevent="reigisterForm()">
          <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right"
              >Name</label
            >
            <div class="col-md-6">
              <input
                id="name"
                type="text"
                v-model="user.name"
                required="required"
                autocomplete="name"
                autofocus="autofocus"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right"
              >E-Mail Address</label
            >
            <div class="col-md-6">
              <input
                id="email"
                type="email"
                v-model="user.email"
                required="required"
                autocomplete="email"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right"
              >Password</label
            >
            <div class="col-md-6">
              <input
                id="password"
                type="password"
                v-model="user.password"
                required="required"
                autocomplete="new-password"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
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