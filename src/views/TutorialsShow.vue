<template>
  <div class="tutorials-show">
    {{ tutorial }}
    <h2>{{ tutorial.name }}</h2>
    <!-- <img v-bind:src="tutorial.url" v-bind:alt="tutorial.name" />
    <p>Width: {{ tutorial.width }}</p>
    <p>Height: {{ tutorial.height }}</p> -->
    <router-link to="/tutorials">Back to all tutorials</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      tutorial: {},
    };
  },
  created: function () {
    axios.get("/tutorials/" + this.$route.params.id).then((response) => {
      console.log("tutorials show", response);
      this.tutorial = response.data;
    });
  },
  methods: {},
};
</script>
