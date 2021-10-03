<template>
<div class="d-flex bg-black" id="wrapper" style="height:1000px">
    <div id="page-content-wrapper">
        <!-- Top navigation-->
        <nav class="navbar navbar-expand-lg border-bottom border-dark">
            <div class="container-fluid">
                <img :src="'logo/logo1.png'" class="" width="100" height="50">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <div class="container">
                            <input type="text" placeholder="Tìm kiếm...">
                            <div class="search"></div>
                        </div>
                        <li class="nav-item ">
                            <router-link 
                                :to="{ path: '/' }"  
                                tag="a" 
                                class="nav-link text-white" >Trang Chủ
                            </router-link></li>
                    <li class="nav-item dropdown" v-if="name">
                        <a class="nav-link dropdown-toggle text-white" 
                        id="navbarDropdown" 
                        href="#" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" 
                        v-if="name" > {{ name }}</a>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <router-link 
                                :to="{ path: '/dashboard' }"  
                                tag="a" 
                                class="dropdown-item" >Trang quản lý
                            </router-link>
                            <a class="dropdown-item"  @click.prevent="logout" >Logout</a>
                        </div>
                    </li>
                    <li class="nav-item" v-else> 
                            <router-link 
                                :to="{ path: 'login' }"  
                                tag="a" 
                                class="nav-link" >Login
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Page content-->
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
           
        }

    },
    mounted() {
        this.getPostPublic();
        this.checkLogin();
    },
    computed: {
        ...mapGetters(['listPost', 'name'])
    },
    methods: {
        ...mapActions(['getPostPublic', 'getPostDetail', 'logoutAdmin', 'checkLogin']),
        postDetail(id) {
            this.getPostDetail(id);
        },
        logout() {
            this.logoutAdmin();
        },
    },
    filters: {
      strLimit(value, size) {
        if (!value) return '';
        value = value.toString();

        if (value.length <= size) {
          return value;
        }
        return value.substr(0, size) + '...';
      },
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background: #252525;
}

.container {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 100px;
  .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: rgb(55, 61, 63);
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 17px;
      right: 0;
      bottom: 0;
      left: 15px;
      width: 9px;
      height: 2px;
      background: white;
      transform: rotate(45deg);
      transition: all .5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid white;
      transition: all .5s;
    }
  }
  input {
    font-family: 'Inconsolata', monospace;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 35px;
    outline: none;
    border: none;
    // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: lightgray;
    color: black;
    // text-shadow: 0 0 10px rgb(65, 54, 56);
    padding: 0 80px 0 20px;
    border-radius: 30px;
    // box-shadow: 0 0 25px 0 rgb(68, 51, 55),
    //             0 20px 25px 0 rgba(0, 0, 0, 0.2);
    // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ .search {
      right: -260px;
      background: #151515;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 25px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 25px;
        height: 2px;
        border: none;
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: rgb(36, 32, 32);
      opacity: 0.5;
      font-weight: bolder;
    }
  }
}
</style>