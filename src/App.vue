<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo"><a href="/">Coders Compendium</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href=index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto" href="/">Home</a></li>
            <!-- <li><a class="nav-link scrollto" href="/about">About</a></li> -->
            <li><a class="nav-link scrollto" href="/tutorials">Tutorials</a></li>
            <li><a class="nav-link scrollto" href="/tutorials/new">New Tutorial</a></li>
            <li><a class="nav-link scrollto" href="/topics">Topics</a></li>
            <li><a class="nav-link scrollto" href="/languages">Languages</a></li>
            <li v-if="!isLoggedin()"><a class="nav-link scrollto" href="/signup">Signup</a></li>
            <li v-if="!isLoggedin()"><a class="nav-link scrollto" href="/login">Login</a></li>
            <li v-if="isLoggedin()"><a class="nav-link scrollto" href="/logout">Logout</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
          <div class="container">
            <div v-if="flashMessage" class="alert alert-success" v-on:click="flashMessage = ''">{{ flashMessage }}</div>
          </div>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex justify-cntent-center align-items-center">
      <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              Welcome to
              <span>Coder's Compendium</span>
            </h2>
            <p class="animate__animated animate__fadeInUp">
              {{ pageDescription }}
            </p>
            <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Take a Look</a>
          </div>
        </div>
        <!-- <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        </a> -->
      </div>
    </section>
    <div style="height: 100px"></div>
    <!-- End Hero -->
    <main id="main" class="container">
      <router-view />
    </main>

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <!-- s -->

            <!-- <div class="col-lg-3 col-md-6 footer-links">
              <h4>Explore by Topic</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div> -->

            <div class="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Me</h4>
              <p>
                <strong>Email:</strong>
                christian.minnie@gmail.com
                <br />
                <strong>GitHub:</strong>
                https://github.com/ChristianMinnie
                <strong>LinkedIn:</strong>
                www.linkedin.com/in/christian-minnie
                <br />
              </p>
              <div class="social-links mt-3">
                <a href="#" class="github"><i class="bx bxl-github"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong><span>Anyar</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/anyar-free-multipurpose-one-page-bootstrap-theme/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style>
#hero {
  height: 500px;
}
body {
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)),
    url(/assets/img/about-bg.png) no-repeat center center fixed;
}
</style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
      pageDescription: "This is the home page",
    };
  },
  methods: {
    isLoggedin: function () {
      // if (localStorage.getItem("jwt")) {
      //   return true;
      // } else {
      //   return false;
      // }
      return localStorage.getItem("jwt");
    },
  },
};
</script>
