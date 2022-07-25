<template src="./template.html"></template>

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
      errorPassword: 'auth/errorPassword',
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