<template>
  <div class="home">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>About Us</h2>
        <p>
          This app is intended for software developers who don't want to trawl through the seemingly endless amount of
          poor quality programming tutorials
        </p>
      </div>
      <div class="row content">
        <div class="col-lg-6">
          <p>
            Using an open source approach, users can upload, share, and rate programming tutorials deemed worthy of
            adding to your Compendium!
          </p>
          <ul>
            <li>
              <i class="ri-check-double-line"></i>
              Search for tutorials by topic and language
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Create a new tutorial by simply adding the URL
            </li>
            <li>
              <i class="ri-check-double-line"></i>
              Rate tutorials by layout and format (UXP), as well as content
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "About this app",
    };
  },
  created: function () {
    this.$parent.pageDescription = "upload, share, and rate programming tutorials";
  },
  methods: {},
};
</script>
