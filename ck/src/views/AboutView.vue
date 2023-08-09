<script setup>
import About from '../components/About.vue';
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <div>
      <Navbar />
      <div class=" p-2">
        <About />
      </div> 
      <Footer />
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
