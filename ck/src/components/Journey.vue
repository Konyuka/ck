<script setup>
import Startup from '@/components/layouts/Startup.vue'
import Process from '@/components/Process.vue'

</script>

<template>
    <Startup>
        <!-- Service Start -->
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="section-title text-center position-relative pb-3  mx-auto" style="max-width: 600px;">
                <h5 class="fw-bold text-primary">This is how we can work together</h5>
                <h1 class="mb-0">Our Process</h1>
            </div>

              <div>
                <Process />
              </div>  

        </div>
        <!-- Service End -->
    </Startup>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');

.wiggle-anim {
  animation: wiggle 3s ease-in-out infinite;
}

@keyframes wiggle {
   0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.big-container {
    display: flex;
    align-items: center;
    /* height: 100vh; */
    /* width: 50%; */
    width: 100%;
    /* padding-right: 1px; */
    /* padding-left: 1px; */
}


.small-text {
    font-size: 15px;
}

.card-height {
    min-height: 600px;
}

.center-directions {
    display: flex;
    justify-content: center;
    align-items: center;
}

.big-icons {
    font-size: 80px;
}


.cardi:hover {
    background: #f97316 none repeat scroll 0 0;
    transition: all 1s ease 0.1s;
    /* animation: fadeContent 1s ease-in-out forwards; */
}


.product__disc--content {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    animation: fadeContent 1s ease-in-out forwards;
    animation-delay: 1s;
    opacity: 0;


}

/*
  keyframes
 */



@keyframes showDisc {
    0% {
        width: 0px;
        left: 450px;
    }

    100% {
        width: 500px;
        left: 450px;
    }
}

@keyframes fadeContent {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes fadeWish {
    0% {
        opacity: 0;
        bottom: -25px;
    }

    100% {
        opacity: 1;
        bottom: 0;
    }
}

@keyframes fadeBuy {
    0% {
        opacity: 0;
        bottom: -25px;
    }

    100% {
        opacity: 1;
        bottom: 0;
    }
}



@keyframes top {
    0% {
        opacity: 0;
        bottom: -80px
    }

    100% {
        opacity: 1;
        bottom: 0px
    }
}

@keyframes icon {
    0% {
        opacity: 0;
        transform: scale(0.0);
    }

    50% {
        opacity: 1;
        transform: scale(1.3) rotate(-02deg);

    }

    100% {
        opacity: 1;
        bottom: 0px;
    }
}
</style>
