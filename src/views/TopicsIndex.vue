<template>
  <div class="topics-index">
    <section id="about" class="pricing">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>All Topics</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div
            v-for="topic in topics"
            v-bind:key="topic.id"
            class="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="box featured">
              <h3>{{ topic.name }}</h3>
              <ul>
                <li v-for="tutorial in topic.tutorials" v-bind:key="tutorial.id">
                  <a v-bind:href="tutorial.hyperlink" target="_blank">{{ tutorial.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
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
