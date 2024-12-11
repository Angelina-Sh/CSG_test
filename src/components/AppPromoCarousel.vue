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
      photos: ['promo.png', 'promo.png', 'promo.png'],
      modules: [Navigation],
    }
  },
}
</script>

<template>
  <div class="line"><h3>SOON</h3></div>
  <div class="promo-carousel">
    <Swiper
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
      :modules="modules"
    >
      <SwiperSlide v-for="photo in photos" :key="photo">
        <img :src="`public/png/${photo}`" alt="" />
      </SwiperSlide>
      <div class="swiper-button-prev">
        <svg
          width="19"
          height="172"
          viewBox="0 0 19 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 3L3.00004 85.8518" stroke="white" stroke-width="5" stroke-linecap="round" />
          <path d="M3 85.8503L16 168.702" stroke="white" stroke-width="5" stroke-linecap="round" />
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg
          width="19"
          height="172"
          viewBox="0 0 19 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 3L16 85.8518" stroke="white" stroke-width="5" stroke-linecap="round" />
          <path
            d="M16 85.8503L3.00004 168.702"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </Swiper>
    <div class="description">
      <h2>FASHION SHOW</h2>
      <h3>OUR FASHIOM SHOW SOON</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promo-carousel {
  width: 100%;
  height: 100vh;
  background: #020305;
  color: #ffffff;
  text-align: center;
  font-family: Arial;
  position: relative;

  img {
    width: 130%;
    height: auto;
    transform: translate(-15%, -20%);
    filter: brightness(0.7);
  }

  .description {
    position: absolute;
    bottom: 130px;
    left: 115px;
    text-align: left;
    z-index: 3;

    h2 {
      font-size: 50px;
      font-weight: 400;
      margin-bottom: 15px;
    }
  }
}

@media (max-width: 768px) {
  .promo-carousel {
    svg {
      transform: scale(0.5);
    }
  }
}

@media (max-width: 425px) {
  .promo-carousel {
    height: 650px;
    img {
      width: 220%;
      transform: translate(-30%, -15%);
    }

    svg {
      transform: scale(0.15);
      path {
        stroke-width: 10px;
      }
    }
    .swiper-button-prev {
      left: 15px;
    }

    .swiper-button-next {
      right: 15px;
    }

    .description {
      bottom: 40px;
      left: 50px;

      h2 {
        font-size: 15px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
