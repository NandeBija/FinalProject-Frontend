<template>
  <Navbar :key="key" />

  <router-view @login="loggedIn" />
  <Footer />
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      key: 0,
    };
  },
  methods: {
    loggedIn() {
      this.key++;
    },
  },
};
</script>
<style>
a {
  color: black;
  text-decoration: none;
}
</style>
