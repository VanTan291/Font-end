<template src="./template.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalPost from './ModalPost.vue';
import moment from 'moment';

export default {
  name: 'Dashboard',
  data() {
    return {
      isModalVisible: false
    }
  },
  components: {
    ModalPost
  },
  mounted() {
    this.getListPostByUser();
  },
  computed: {
     ...mapGetters({
        // userProfile: 'auth/userProfile',
        listPostByUser: 'dashboard/listPostByUser',
        listPostByUserEmpty: 'dashboard/listPostByUserEmpty'
    }),
  },
  methods: {
    ...mapActions({
      getListPostByUser: 'dashboard/getListPostByUser'
    }),
    showModal(e) {
      e.preventDefault();
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  filters: {
    convertDate(date) {
      return moment(date).format('DD-MM-YYYY HH:MM:ss');
    }
  }
};
</script>