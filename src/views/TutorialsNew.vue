<template>
  <div class="tutorials-new">
    <form v-on:submit.prevent="createTutorial()">
      <h1>New Tutorial</h1>

      <div class="mb-3">
        <label for="inputURL" class="form-label">Link to tutorial</label>
        <input type="text" class="form-control" id="inputURL" v-model="newTutorialParams.hyperlink" />
        <div id="descriptionHelp" class="form-text">Please provide a url for the new tutorial.</div>
      </div>

      <h4 class="mt-3">Topics</h4>
      <div class="form-check form-check-inline" v-for="topic in topics" v-bind:key="`topic-${topic.id}`">
        <input type="checkbox" class="form-check-input" :id="topic.name" :value="topic.id" v-model="checkedTopics" />
        <label :for="topic.name">{{ topic.name }}</label>
      </div>
      <span>Checked topics: {{ checkedTopics }}</span>

      <h4 class="mt-3">Languages</h4>
      <div class="form-check form-check-inline" v-for="language in languages" v-bind:key="`language-${language.id}`">
        <input
          type="checkbox"
          class="form-check-input"
          :id="language.name"
          :value="language.id"
          v-model="checkedLanguages"
        />
        <label :for="language.name">{{ language.name }}</label>
      </div>
      <span>Checked languages: {{ checkedLanguages }}</span>

      <div class="mt-3">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newTutorialParams: {},
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
    createTutorial: function () {
      this.newTutorialParams.topic_ids = this.checkedTopics;
      this.newTutorialParams.language_ids = this.checkedLanguages;
      axios
        .post("/tutorials", this.newTutorialParams)
        .then((response) => {
          console.log("tutorials create", response);
          this.$router.push("/tutorials");
        })
        .catch((error) => {
          console.log("tutorials create error", error.response);
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
