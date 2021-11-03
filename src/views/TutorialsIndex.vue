<template>
  <div class="tutorials-index">
    <h1>All Tutorials</h1>
    <div v-for="tutorial in tutorials" v-bind:key="tutorial.id">
      <h2>{{ tutorial.description }}</h2>
      {{ tutorial.topics }}
      <div v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
        {{ tutorial.languages }}
      </div>
      <a v-bind:href="tutorial.hyperlink" target="_blank">Link to tutorial</a>
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
