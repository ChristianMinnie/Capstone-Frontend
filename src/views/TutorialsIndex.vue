<template>
  <div class="tutorials-index">
    <h1>All Tutorials</h1>
    <div v-for="tutorial in tutorials" v-bind:key="tutorial.id">
      <h2>{{ tutorial.description }}</h2>
      <a v-bind:href="tutorial.hyperlink">go to tutorial</a>
      <!-- <img v-bind:src="tutorial.url" v-bind:alt="tutorial.name" />
      <p>Width: {{ tutorial.width }}</p>
      <p>Height: {{ tutorial.height }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      tutorials: [],
    };
  },
  created: function () {
    this.indexTutorials();
  },
  methods: {
    indexTutorials: function () {
      axios.get("/tutorials").then((response) => {
        console.log("tutorials index", response);
        this.tutorials = response.data;
      });
    },
  },
};
</script>
