<template src="./modalTemplate.html"></template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Modal",
  data() {
    return {
      thumbnail: null,
    }
  },
  computed: {
     ...mapGetters({
        newPost: 'post/newPost',
    }),
  },
  methods: {
    getCollectionThumbnail(e) {
      this.newPost.thumbnail = e.target.files[0];

      var reader = new FileReader();
      reader.onload = (e) => {
        this.thumbnail = e.target.result;
      };
      reader.readAsDataURL(this.newPost.thumbnail);
    },
    async saveCollection() {
      let result = await this.$store.dispatch("post/createPost", this.newPost);
      if (result) {
        console.log('aaa')
        this.$refs['my-modal'].hide()
      }
    }
  },
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
