<template>
    <nav class="navbar navbar-expand-md navbar-dark mb-4" style="background-color:#3097D1">
        <a href="index.html" class="navbar-brand">
            <img src="" alt="logo" class="img-fluid" width="80px" height="100px">
        </a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#responsive"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="responsive">
            <ul class="navbar-nav mr-auto text-capitalize">
                <li class="nav-item">
                    <router-link to="/admin/" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item"><a href="profile.html" class="nav-link">profile</a></li>
                <li class="nav-item"><a href="#modalview" class="nav-link" data-toggle="modal">messages</a></li>
                <li class="nav-item"><a href="notification.html" class="nav-link">docs</a></li>
                <li class="nav-item"><a href="#" class="nav-link d-md-none">growl</a></li>
                <li class="nav-item"><a href="#" class="nav-link d-md-none">logout</a></li>
            </ul>
            <form action="" class="form-inline ml-auto d-none d-md-block float-right">
                <input type="text" name="search" id="search" placeholder="Search" class="form-control form-control-sm">
            </form>
        </div>
        <div class="">
            <button @click="logout()">logout</button>
        </div>
    </nav>
</template>

<script>
import router from '../../router';
export default {
    name: 'Header',
    methods: {
        logout() {
            localStorage.removeItem('_token');
            router.push({ name: 'login' });
        },
    },
}
</script>