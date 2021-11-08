<template>
  <div class="topics-index">
    <h1>All Topics</h1>
    <div v-for="topic in topics" v-bind:key="topic.id">
      <h2>{{ topic.name }}</h2>
      <div v-for="tutorial in topic.tutorials" v-bind:key="tutorial.id">
        <a v-bind:href="tutorial.hyperlink" target="_blank">{{ tutorial.description }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      topics: [],
    };
  },
  created: function () {
    this.indexTopics();
  },
  methods: {
    indexTopics: function () {
      axios.get("/topics").then((response) => {
        console.log("topics index", response);
        this.topics = response.data;
      });
    },
  },
};
</script>
