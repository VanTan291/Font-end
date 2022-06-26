<template src="./template.html"></template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  components: {

  },
  mounted() {
    this.getProfileUser();
    this.getListPostByUser();
  },
  computed: {
     ...mapGetters({
        profileByUser: 'dashboard/profileByUser',
        listPostByUser: 'dashboard/listPostByUser'
    }),
  },
  methods: {
    ...mapActions({
      getProfileUser: 'dashboard/getProfileUser',
      getListPostByUser: 'dashboard/getListPostByUser'
    }),
  }
};
</script>