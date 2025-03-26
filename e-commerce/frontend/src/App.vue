<script setup>

</script>

<template>

  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/my-images">My Images</router-link>
    <router-link to="/login">Login</router-link>
  </div>
  <!-- Body of the conten -->
  <div class="container">
    <router-view></router-view>
  </div>
</template>
