<template>
  <div class="tutorials-index">
    <h1>All Tutorials</h1>
    <div>
      Search by topic:
      <input type="text" v-model="topicFilter" list="tutorial-topics" />
      <datalist id="tutorial-topics">
        <option v-for="topic in topics" v-bind:key="topic.id">
          {{ topic.name }}
        </option>
      </datalist>
    </div>
    <button v-on:click="createTopic()">Create Topic</button>
    <!-- <div>
      Search by description:
      <input type="text" v-model="descriptionFilter" list="tutorial-descriptions" />
      <datalist id="tutorial-descriptions">
        <div v-for="description in filterBy(tutorials, descriptionFilter)" v-bind:key="description.id">
          {{ description.description }}
        </div>
      </datalist>
    </div> -->
    <div v-for="tutorial in filterBy(tutorials, topicFilter)" v-bind:key="tutorial.id">
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      tutorials: [],
      topicFilter: "",
      descriptionFilter: "",
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
    createTopic: function () {
      this.newTopicParams.topic_id = this.$route.params.id;
      axios
        .post("/topics", this.newTopicParams)
        .then((response) => {
          console.log("topics create", response);
          this.tutorial.topics.push(response.data);
          this.newTopicsParams = {};
        })
        .catch((error) => {
          console.log("topics create error", error.response);
        });
    },
  },
};
</script>
