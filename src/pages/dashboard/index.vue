<template src="./template.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ModalPost from './ModalPost.vue';

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
    this.getProfileUser();
    this.getListPostByUser();
  },
  computed: {
     ...mapGetters({
        profileByUser: 'dashboard/profileByUser',
        listPostByUser: 'dashboard/listPostByUser',
        listPostByUserEmpty: 'dashboard/listPostByUserEmpty'
    }),
  },
  methods: {
    ...mapActions({
      getProfileUser: 'dashboard/getProfileUser',
      getListPostByUser: 'dashboard/getListPostByUser'
    }),
    showModal(e) {
      e.preventDefault();
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>