<template>
  <div class="tutorials-show">
    <!-- {{ tutorial }} -->
    <h2>{{ tutorial.title }}</h2>
    <p>{{ tutorial.description }}</p>
    <div v-for="topic in tutorial.topics" v-bind:key="`topic-${topic.id}`">
      <p>Topic: {{ topic }}</p>
    </div>
    <div v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
      <p>Language: {{ language }}</p>
    </div>
    <a v-bind:href="tutorial.hyperlink" target="_blank">{{ tutorial.hyperlink }}</a>

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Ratings</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div
            v-for="rating in tutorial.ratings"
            v-bind:key="`rating-${rating.id}`"
            class="col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="icon-box">
              <i class="bi bi-card-checklist"></i>
              <h4>
                <a href="#">{{ rating.user.user_name }}</a>
              </h4>
              <p>UXP Rating: {{ rating.uxp_rating }}</p>
              <p>Content Rating: {{ rating.content_rating }}</p>
              <p>Description: {{ rating.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <router-link to="/tutorials">Back to all tutorials</router-link>
    <h2>Ratings</h2>
    <div>
      <div>
        UXP Rating:
        <star-rating v-model="newRatingParams.uxp_rating" :increment="0.5" :star-size="20" :inline="true" />
      </div>
      <div>
        Content Rating:
        <star-rating v-model="newRatingParams.content_rating" :increment="0.5" :star-size="20" :inline="true" />
      </div>
      Description:
      <input type="text" v-model="newRatingParams.description" />
      <button v-on:click="createRating()">Create Rating</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
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
