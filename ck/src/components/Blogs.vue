<script setup>
import Startup from '@/components/layouts/Startup.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const blogs = ref(null)

const truncateExcerpt = (str, numWords) => {
  const words = str.split(' ');
  if (words.length <= numWords) {
    return str; 
  } else {
    const truncatedString = words.slice(0, numWords).join(' ') + '...';
    return truncatedString;
  }
}

onMounted(() => {
  const blogsURL = 'http://localhost:8001/api/posts'
  axios.get(
    blogsURL
  )
    .then(res => (
      blogs.value = res.data
    ))
    .catch(err => {
      console.log(err)

    })
})
</script>

<template>
  <Startup>
    <div>
      <!-- Navbar Start -->
      <div class="container-fluid position-relative p-0">


        <div class="container-fluid bg-primary py-2 bg-header" style="margin-bottom: 90px;">
          <div class="row py-5">
            <div class="col-12 pt-lg-2 mt-lg-2 text-center">
              <h1 class="display-4 text-white animated zoomIn">Blog Grid</h1>
              <a href="" class="h5 text-white">Home</a>
              <i class="far fa-circle text-white px-2"></i>
              <a href="" class="h5 text-white">Blog Grid</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar End -->


      <!-- Full Screen Search Start -->
      <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
            <div class="modal-header border-0">
              <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex align-items-center justify-content-center">
              <div class="input-group" style="max-width: 600px;">
                <input type="text" class="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword">
                <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Full Screen Search End -->


      <!-- Blog Start -->
      <div class="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div class="px-5">
          <div class="row g-5">
            <!-- Blog list Start -->
            <div class="col-lg-9">
              <div class="row g-5">

                <div v-for="blog in blogs" class="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div  class="blog-item bg-light rounded overflow-hidden">
                    <div class="blog-img position-relative overflow-hidden">
                      <img class="img-fluid" src="@/assets/startup/img/blog-1.jpg" alt="">
                      <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                        href="">Web Design</a>
                    </div>
                    <div class="p-4">
                      <div class="d-flex mb-3">
                        <!-- <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small> -->
                        <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                      </div>
                      <h4 class="mb-3">{{ blog.title }}</h4>
                      <p>{{ truncateExcerpt(blog.synopsis, 30)  }}</p>
                      <RouterLink :to="{ name: 'details', params: { slug: blog.url, id: blog.id } }" class="text-uppercase text-primary font-weight-bold" href=""> Read More <i class="fas fa-caret-right ml-2"></i></RouterLink>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
            <!-- Blog list End -->

            <!-- Sidebar Start -->
            <div class="col-lg-3">
              <!-- Search Form Start -->
              <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div class="input-group">
                  <input type="text" class="form-control p-3" placeholder="Keyword">
                  <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                </div>
              </div>
              <!-- Search Form End -->

              <!-- Tags Start -->
              <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="mb-0">Categories</h3>
                </div>
                <div class="d-flex flex-wrap m-n1">
                  <a href="" class="btn btn-light m-1">Design</a>
                  <a href="" class="btn btn-light m-1">Development</a>
                  <a href="" class="btn btn-light m-1">Marketing</a>
                  <a href="" class="btn btn-light m-1">SEO</a>
                  <a href="" class="btn btn-light m-1">Writing</a>
                  <a href="" class="btn btn-light m-1">Consulting</a>
                  <a href="" class="btn btn-light m-1">Design</a>
                  <a href="" class="btn btn-light m-1">Development</a>
                  <a href="" class="btn btn-light m-1">Marketing</a>
                  <a href="" class="btn btn-light m-1">SEO</a>
                  <a href="" class="btn btn-light m-1">Writing</a>
                  <a href="" class="btn btn-light m-1">Consulting</a>
                </div>
              </div>
              <!-- Tags End -->

              <!-- Recent Post Start -->
              <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="mb-0">Recent Post</h3>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-1.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-2.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-3.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-1.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-2.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
                <div class="d-flex rounded overflow-hidden mb-3">
                  <img class="img-fluid" src="@/assets/startup/img/blog-3.jpg"
                    style="width: 100px; height: 100px; object-fit: cover;" alt="">
                  <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit
                    amet adipis elit
                  </a>
                </div>
              </div>
              <!-- Recent Post End -->

            </div>
            <!-- Sidebar End -->
          </div>
        </div>
      </div>
      <!-- Blog End -->
    </div>
  </Startup>
</template>

<style scoped></style>
