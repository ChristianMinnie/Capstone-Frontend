<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/tutorials">Tutorials</router-link>
      |
      <router-link to="/tutorials/new">New Tutorial</router-link>
      |
      <router-link to="topics">Topics</router-link>
      |
      <!-- <router-link to="/ratings/new">New Rating</router-link>
      | -->
      <router-link to="languages">Languages</router-link>
      <router-link v-if="!isLoggedin()" to="/signup">Signup</router-link>
      |
      <router-link v-if="!isLoggedin()" to="/login">Login</router-link>
      |
      <router-link v-if="isLoggedin()" to="/logout">Logout</router-link>
    </div>
    <div class="container">
      <div v-if="flashMessage" class="alert alert-success" v-on:click="flashMessage = ''">{{ flashMessage }}</div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedin: function () {
      // if (localStorage.getItem("jwt")) {
      //   return true;
      // } else {
      //   return false;
      // }
      return localStorage.getItem("jwt");
    },
  },
};
</script>
