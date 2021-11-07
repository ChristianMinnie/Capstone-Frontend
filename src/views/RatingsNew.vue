<template>
  <div class="ratings-new">
    <h1>All possible topics</h1>

    <div v-for="topic in topics" v-bind:key="`topic-${topic.id}`">
      <input type="checkbox" :id="topic.name" :value="topic.id" v-model="checkedTopics" />
      <label :for="topic.name">{{ topic.name }}</label>
    </div>
    <span>Checked topics: {{ checkedTopics }}</span>

    <h1>All possible languages</h1>
    <div v-for="language in languages" v-bind:key="`language-${language.id}`">
      <input type="checkbox" :id="language.name" :value="language.id" v-model="checkedLanguages" />
      <label :for="language.name">{{ language.name }}</label>
    </div>
    <span>Checked languages: {{ checkedLanguages }}</span>

    <h1>New Rating</h1>
    <form v-on:submit.prevent="createRating()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      User Experience:
      <input type="integer" v-model="newRatingParams.uxp_rating" />
      Content Rating:
      <input type="integer" v-model="newRatingParams.content_rating" />
      Description:
      <input type="text" v-model="newRatingParams.description" />
      <!-- URL:
      <input type="text" v-model="newTutorialParams.hyperlink" />
      <input type="submit" value="Create" /> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newRatingParams: {},
      topics: [],
      languages: [],
      errors: [],
      checkedTopics: [],
      checkedLanguages: [],
    };
  },
  created: function () {
    this.indexTopics();
    this.indexLanguages();
  },
  methods: {
    createRating: function () {
      this.newRatingParams.topic_ids = this.checkedTopics;
      this.newRatingParams.language_ids = this.checkedLanguages;
      axios
        .post("/ratings", this.newRatingParams)
        .then((response) => {
          console.log("ratings create", response);
          this.$router.push("/ratings");
        })
        .catch((error) => {
          console.log("ratings create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    indexTopics: function () {
      axios.get("/topics").then((response) => {
        console.log("topics index", response);
        this.topics = response.data;
      });
    },
    indexLanguages: function () {
      axios.get("/languages").then((response) => {
        console.log("languages index", response);
        this.languages = response.data;
      });
    },
  },
};
</script>
