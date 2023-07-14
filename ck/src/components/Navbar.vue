<script setup>
import Megakit from '@/components/layouts/Megakit.vue'
import { RouterLink } from 'vue-router'


</script>

<template>
    <Megakit>
        <!-- Header Start -->
        <header class="navigation">
            <div class="header-top ">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-lg-2 col-md-4">
                            <div class="header-top-socials text-center text-lg-left text-md-left">
                                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                    <img class="media-icon" src="@/assets/app/ig.svg" alt="">
                                </a>
                                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                    <img class="media-icon" src="@/assets/app/fb.svg" alt="">
                                </a>
                                <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                    <img class="media-icon" src="@/assets/app/twitter.svg" alt="">
                                </a>
                                <!-- <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                    <img class="media-icon" src="@/assets/app/linkedin.svg" alt="">
                                </a> -->

                            </div>
                        </div>
                        <div class="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
                            <div class="header-top-info">
                                <a href="tel:+25471769050">
                                    <span class="contact-hover">+254 717 269 050</span>
                                </a>
                                <a href="mailto:lynnkimeto55@gmail.com">
                                    <span class="contact-hover">info@commercialkitchen.co.ke</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg  py-4" id="navbar">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        Commercial Kitchen<span> Consultancy.</span>
                    </a>

                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="fa fa-bars"></span>
                    </button>

                    <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <RouterLink class="nav-link" to="/">Home</RouterLink>
                            </li>
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">About</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown03">
                                    <li><a class="dropdown-item" href="about.html">Our company</a></li>
                                    <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                                </ul>
                            </li> -->
                            <li class="nav-item"><RouterLink class="nav-link" to="/services">Services</RouterLink></li>
                            <li class="nav-item"><a class="nav-link" href="project.html">Our Story</a></li>
                            <!-- <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown05">
                                    <li><a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                                    <li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>

                                    <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                </ul>
                            </li> -->
                            <li class="nav-item"><a class="nav-link" href="contact.html">Media</a></li>
                        </ul>

                        <form class="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
                            <RouterLink to="/contacts" class="button btn btn-solid-border btn-round-full">Get in Touch</RouterLink>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
        <!-- Header Close -->
    </Megakit>
</template>

<style lang="css" scoped>
.icon-color {
    color: #f97316;
}

.button {
    background-color: transparent;
}

.button:hover {
    background-color: #f97316;
}
.contact-hover:hover {
    color: #f97316;
}

.media-icon {
    height: 25px;
    width: 25px;
}
</style>
