<template>
  <!--------------------------left columns  start-->
  <div class="col-12 col-lg-3">
    <div class="left-column">
      <div class="card card-left1 mb-4">
        <img
          src=""
          alt=""
          class="card-img-top img-fluid"
        />
        <div class="card-body text-center">
          <img
            src=""
            alt="img"
            width="120px"
            height="120px"
            class="rounded-circle mt-n5"
          />
          <h5 class="card-title">{{ profileByUser.name }}</h5>
          <p class="card-text text-justify mb-2">
            I wish i was a little bit taller, wish i was a baller, wish i had a
            girl… also.
          </p>
          <ul class="list-unstyled nav justify-content-center">
            <a href="#" class="text-dark text-decoration-none">
              <li class="nav-item">
                Friends <br />
                <strong>12M</strong>
              </li></a
            >
            <a href="#" class="text-dark text-decoration-none">
              <li class="nav-item">
                Enimes <br />
                <strong>1</strong>
              </li></a
            >
          </ul>
        </div>
      </div>

      <div class="card shadow-sm card-left2 mb-4">
        <div class="card-body">
          <h5 class="mb-3 card-title">
            About <small><a href="#" class="ml-1">Edit</a></small>
          </h5>

          <p class="card-text">
            <i class="fas fa-calendar-week mr-2"></i> Went to
            <a href="#" class="text-decoration-none">oh canada</a>
          </p>

          <p class="card-text">
            <i class="fas fa-user-friends mr-2"></i> Become a friend with
            <a href="#" class="text-decoration-none">obama</a>
          </p>
          <p class="card-text">
            <i class="far fa-building mr-2"></i> Work at
            <a href="#" class="text-decoration-none">Github</a>
          </p>
          <p class="card-text">
            <i class="fas fa-home mr-2"></i> Live in
            <a href="#" class="text-decoration-none">San francisco</a>
          </p>
          <p class="card-text">
            <i class="fas fa-map-marker mr-2"></i> From
            <a href="#" class="text-decoration-none">Seattle, WA</a>
          </p>
        </div>
      </div>

      <div class="card shadow-sm card-left3 mb-4">
        <div class="card-body">
          <h5 class="card-title">
            Photos<small class="ml-2"><a href="#">.Edit </a></small>
          </h5>
        </div>
      </div>
    </div>
  </div>

  <!--------------------------Ends Left columns-->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Sidebar",
  computed: {
     ...mapGetters({
        profileByUser: 'dashboard/profileByUser',
    }),
  },
 
};
</script>

<style scoped>
.size-image {
  width: 65px;
  height: 50px;
}
.marging-item {
  margin-bottom: -7px;
}
.fontSizeMenu {
  font-size: 14px;
}
.activeSidebar {
  background-color: #007bff;
}
</style>