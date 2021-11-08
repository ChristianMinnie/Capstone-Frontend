<template>
  <div class="tutorials-index">
    <!-- <div v-for="topic in tutorial.topics" v-bind:key="`topic-${topic.id}`">
      <p>Topic: {{ topic }}</p>
    </div>
    <div v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
      <p>Language: {{ language }}</p>
    </div> -->
    <h1>All Tutorials</h1>
    <div>
      Search:
      <input type="text" v-model="filter" list="tutorial-topics" />
      <datalist id="tutorial-topics">
        <option v-for="topic in topics" v-bind:key="`topic-${topic.id}`">
          {{ topic.name }}
        </option>
        <option v-for="language in languages" v-bind:key="`language-${language.id}`">
          {{ language.name }}
        </option>
      </datalist>
    </div>

    <div v-for="tutorial in filterBy(tutorials, filter)" v-bind:key="tutorial.id">
      <h2>{{ tutorial.description }}</h2>
      <a v-bind:href="tutorial.hyperlink" target="_blank">{{ tutorial.hyperlink }}</a>
      <h4>Topics:</h4>
      <ul>
        <li v-for="topic in tutorial.topics" v-bind:key="`topic-${topic.id}`">
          {{ topic.name }}
        </li>
      </ul>

      <h4>Languages:</h4>
      <ul>
        <li v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
          {{ language.name }}
        </li>
      </ul>
    </div>

    <!-- <h2>New Topic</h2>
    <div>
      Add Topic:
      <input type="text" v-model="newTopicParams.name" />
      <button v-on:click="createTopic()">Create Topic</button>
    </div> -->
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
      languages: [],
      filter: "",
      topics: [],
      newTopicParams: {},
    };
  },
  created: function () {
    this.indexTutorials();
    this.indexTopics();
    this.indexLanguages();
  },
  methods: {
    indexTutorials: function () {
      axios.get("/tutorials").then((response) => {
        console.log("tutorials index", response);
        this.tutorials = response.data;
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
    // createTopic: function () {
    //   this.newTopicParams.topic_id = this.$route.params.id;
    //   axios
    //     .post("/topics", this.newTopicParams)
    //     .then((response) => {
    //       console.log("topics create", response);
    //       this.tutorial.topics.push(response.data);
    //       this.newTopicParams = {};
    //     })
    //     .catch((error) => {
    //       console.log("topics create error", error.response);
    //     });
    // },
  },
};
</script>
