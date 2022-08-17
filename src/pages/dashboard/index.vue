<template src="./template.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalPost from './ModalPost.vue';
import moment from 'moment';

export default {
  name: 'Dashboard',
  data() {
    return {
      isModalVisible: false,
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
        listPostByUserEmpty: 'dashboard/listPostByUserEmpty',
        alertMessage: 'dashboard/alertMessage',
    }),
  },
  methods: {
    ...mapActions({
      getListPostByUser: 'dashboard/getListPostByUser',
    }),
    showModal(e) {
      e.preventDefault();
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    async deletePost(id) {
      const result = await this.$store.dispatch("dashboard/deletePost", id);
      if (result) {
        this.$store.commit('dashboard/LIST_POST_BY_USER', result)
        this.$store.commit('dashboard/ALERT_MESSAGE', result)
      }
    }
  },
  filters: {
    convertDate(date) {
      return moment(date).format('DD-MM-YYYY HH:MM:ss');
    }
  }
};
</script>