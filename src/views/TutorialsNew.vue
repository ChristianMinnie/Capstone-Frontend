<template>
  <div class="tutorials-new">
    <h1>All possible topics</h1>
    <h1>All possible languages</h1>
    <h1>New Tutorial</h1>
    <form v-on:submit.prevent="createTutorial()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <!-- Name:
      <input type="text" v-model="newTutorialParams.name" /> -->
      Description:
      <input type="text" v-model="newTutorialParams.description" />
      URL:
      <input type="text" v-model="newTutorialParams.hyperlink" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newTutorialParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createTutorial: function () {
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
  },
};
</script>
