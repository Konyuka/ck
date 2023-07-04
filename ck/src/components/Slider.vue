<script setup scoped>
import Startup from '@/components/layouts/Startup.vue'
</script>


<template>
  <Startup>
    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">

      <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">

          <div class="carousel-height carousel-item active">
            <img class="w-100" src="@/assets/startup/img/carousel-1.jpg" alt="Image">
            <div
              class="w-100 carousel-height carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 800px;">
                <h1 class="text-white text-uppercase mb-md-4 animated zoomIn">
                  From Concept to Completion We Guide You Every Step of the Way
                </h1>
                <h4 class="text-white mb-3 animated slideInDown">Transform your food service vision into
                  reality with our expert consultancy services. We provide
                  comprehensive guidance and support, ensuring a seamless transition from concept to a remarkable
                  culinary space. 
                </h4>
                <!-- <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> -->
              </div>
            </div>
          </div>

          <div class="carousel-height carousel-item">
            <img class="w-100" src="@/assets/startup/img/carousel-2.jpg" alt="Image">
            <div class="carousel-height carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h5 class="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
              </div>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Navbar & Carousel End -->
  </Startup>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');

.carousel-height {
  height: 645px;
  /* width: 100vw; */
}
</style>
