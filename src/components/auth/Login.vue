<template>
  <div class="container">
    <div class="card mx-auto mt-5" style="max-width: 500px">
      <div class="card-body">
        <div class="mx-auto text-center">
          <h3 class="mt-4 font-weight-bold">Đăng Nhập</h3>
        </div>
        <div class="card-body">
          <div v-if="errorLogin">
            <h5 class="text-center font-weight-bold text-danger">{{ errorLogin.message }}</h5>
          </div>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Tên đăng nhập</label>
              <input
                type="text"
                class="form-control"
                v-model="formData.email"
              />
              <p class="text-danger" v-if="errorEmail">{{ errorEmail.message }}</p>
              <p class="text-danger" v-if="errorRequest && errorRequest.errors.email">{{ errorRequest.errors.email[0] }}</p>              
            </div>
            <div class="form-group">
              <label for="password">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                v-model="formData.password"
              />
              <p class="text-danger" v-if="errorRequest && errorRequest.errors.password">{{ errorRequest.errors.password[0] }}</p>
            </div>
            <div class="form-group text-center pt-5">
              <button type="submit" class="btn btn-dark btn-login">Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapGetters({
      errorLogin: 'auth/errorLogin',
      errorRequest: 'auth/errorRequest',
      errorEmail: 'auth/errorEmail',
    }),
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', this.formData);
    }
  },
};
</script>

<style scoped>
.size-image {
  width: 91px;
  height: 80px;
}
.btn-login {
  background-color: #353A40;
  margin: 0px auto;
  width: 150px;
  font-weight: bold;
}
</style>