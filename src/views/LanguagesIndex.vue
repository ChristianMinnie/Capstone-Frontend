<template>
  <div class="languages-index">
    <h1>All Languages</h1>
    <div v-for="language in languages" v-bind:key="language.id">
      <h2>{{ language.name }}</h2>
      <div v-for="tutorial in language.tutorials" v-bind:key="tutorial.id">
        {{ tutorial }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      languages: [],
    };
  },
  created: function () {
    this.indexLanguages();
  },
  methods: {
    indexLanguages: function () {
      axios.get("/languages").then((response) => {
        console.log("languages index", response);
        this.languages = response.data;
      });
    },
  },
};
</script>
