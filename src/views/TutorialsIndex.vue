<template>
  <div class="tutorials-index">
    <!-- ======= Team Section ======= -->
    <section id="about" class="team section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Tutorials Index</h2>

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
        </div>

        <div class="row">
          <div
            v-for="tutorial in filterBy(tutorials, filter)"
            v-bind:key="tutorial.id"
            class="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="member d-flex align-items-start mb-2">
              <div class="pic"><img v-bind:src="tutorial.image" class="img-fluid" alt="" /></div>
              <div class="member-info">
                <h4>{{ tutorial.title }}</h4>
                <span>
                  <a v-bind:href="tutorial.hyperlink" target="_blank">{{ tutorial.hyperlink }}</a>
                </span>
                <h6>
                  UXP Average Rating:
                  <star-rating
                    v-model="tutorial.uxp_average_rating"
                    read-only
                    :increment="0.5"
                    :show-rating="false"
                    :star-size="10"
                    :inline="true"
                  />
                </h6>
                <h6>
                  Content Average Rating:
                  <star-rating
                    v-model="tutorial.content_average_rating"
                    read-only
                    :increment="0.5"
                    :show-rating="false"
                    :star-size="10"
                    :inline="true"
                  />
                </h6>
                <p>{{ tutorial.description }}</p>
                <router-link v-bind:to="`/tutorials/${tutorial.id}`">Go to Tutorial</router-link>
                <!-- <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""><i class="ri-linkedin-box-fill"></i></a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Team Section -->

    <!-- <div v-for="topic in tutorial.topics" v-bind:key="`topic-${topic.id}`">
      <p>Topic: {{ topic }}</p>
    </div>
    <div v-for="language in tutorial.languages" v-bind:key="`language-${language.id}`">
      <p>Language: {{ language }}</p>
    </div> -->

    <!-- <div v-for="tutorial in filterBy(tutorials, filter)" v-bind:key="tutorial.id">
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
    </div> -->

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
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
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
    this.$parent.pageDescription = "This is a list of all the tutorials";
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
