<template>
  <div class="languages-index">
    <section id="about" class="pricing">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>All Languages</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row">
          <div
            v-for="language in languages"
            v-bind:key="language.id"
            class="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="box featured">
              <h3>{{ language.name }}</h3>
              <ul>
                <li v-for="tutorial in language.tutorials" v-bind:key="tutorial.id">
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
      languages: [],
    };
  },
  created: function () {
    this.indexLanguages();
  },
  methods: {
    indexLanguages: function () {
      axios.get("/languages").then((response) => {
        console.log("languages index", response);
        this.languages = response.data;
      });
    },
  },
};
</script>
