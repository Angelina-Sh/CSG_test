<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      photos: ['intro.png', 'intro.png', 'intro.png'],
      modules: [Navigation],
    }
  },
}
</script>

<template>
  <div class="intro">
    <Swiper
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
      :modules="modules"
    >
      <SwiperSlide v-for="photo in photos" :key="photo">
        <img :src="`/png/${photo}`" alt="" />
      </SwiperSlide>
      <div class="swiper-button-prev">
        <svg
          width="15"
          height="153"
          viewBox="0 0 15 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.7723 151.55L1.00033 76.0353" stroke="white" stroke-linecap="round" />
          <path d="M0.999817 76.0366L13.7718 0.521468" stroke="white" stroke-linecap="round" />
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg
          width="15"
          height="153"
          viewBox="0 0 15 153"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.21753 0.999695L13.9895 76.5148" stroke="white" stroke-linecap="round" />
          <path d="M13.99 76.5135L1.21803 152.029" stroke="white" stroke-linecap="round" />
        </svg>
      </div>
    </Swiper>

    <div class="intro-text">
      <p>Be feminine - choose us</p>
      <h3>
        <router-link to="/catalog">LOOK ALL</router-link>
      </h3>
    </div>
  </div>
  <div class="line">
    <h3>NEW COLLECTION</h3>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  width: 100%;
  height: 100vh;
  background: #020305;
  color: #ffffff;
  position: relative;

  .swiper-slide {
    img {
      width: auto;
      height: 150%;
    }
  }

  .intro-text {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 3;

    a {
      color: #ffffff;
      text-decoration: underline;
    }

    * {
      margin: 20px;
    }
  }
}

@media (max-width: 768px) {
  .intro {
    height: auto;
    .swiper {
      .swiper-slide {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media (max-width: 425px) {
  .intro {
    height: auto;
    .swiper {
      .swiper-slide {
        img {
          width: 100%;
          height: auto;
        }
      }

      svg {
        height: 18px;
        path {
          stroke-width: 10px;
        }
      }

      .swiper-button-prev {
        left: 20px;
      }

      .swiper-button-next {
        right: 20px;
      }
    }
    .intro-text {
      * {
        margin: 5px;
      }
    }
  }
}
</style>
