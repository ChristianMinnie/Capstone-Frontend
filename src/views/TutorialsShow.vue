<template>
  <div class="tutorials-show">
    <h2>{{ tutorial.description }}</h2>
    <div v-for="topic in tutorial.topics" v-bind:key="`topic-${topic.id}`">
      <p>Topic: {{ topic }}</p>
    </div>
    <div v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
      <p>Language: {{ language }}</p>
    </div>
    <p>{{ tutorial.hyperlink }}</p>
    <p>Ratings:</p>
    <div v-for="rating in tutorial.ratings" v-bind:key="`rating-${rating.id}`">
      <p>UXP: {{ rating.uxp_rating }}</p>
      <p>Content: {{ rating.content_rating }}</p>
      <p>Description: {{ rating.description }}</p>
    </div>
    <router-link to="/tutorials">Back to all tutorials</router-link>
    <h2>Ratings</h2>
    <div>
      UXP Rating:
      <input type="text" v-model="newRatingParams.uxp_rating" />
      Content Rating:
      <input type="text" v-model="newRatingParams.content_rating" />
      Description:
      <input type="text" v-model="newRatingParams.description" />
      <button v-on:click="createRating()">Create Rating</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      tutorial: {},
      newRatingParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/tutorials/" + this.$route.params.id).then((response) => {
      console.log("tutorials show", response);
      this.tutorial = response.data;
    });
  },
  methods: {
    createRating: function () {
      this.newRatingParams.tutorial_id = this.$route.params.id;
      axios
        .post("/ratings", this.newRatingParams)
        .then((response) => {
          console.log("ratings create", response);
          this.tutorial.ratings.push(response.data);
          this.newRatingParams = {};
        })
        .catch((error) => {
          console.log("ratings create error", error.response);
        });
    },
  },
};
</script>
