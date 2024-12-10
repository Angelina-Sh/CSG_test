<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import AppCard from './AppCard.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    AppCard,
  },
  data() {
    return {
      photos: [
        { imgUrl: 'png/card2.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
        { imgUrl: 'png/card2.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
        { imgUrl: 'png/card2.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
      ],
      modules: [Navigation],
    }
  },
}
</script>

<template>
  <div class="promo-single">
    <div class="left"></div>
    <div class="right">
      <Swiper
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :loop="true"
        :modules="modules"
      >
        <SwiperSlide v-for="photo in photos" :key="photo.imgUrl">
          <AppCard :imgUrl="photo.imgUrl" :title="photo.title" :price="photo.price" />
        </SwiperSlide>
        <div class="swiper-button-prev">
          <svg
            width="4"
            height="20"
            viewBox="0 0 4 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.08813 19.0001L0.999906 10" stroke="#020305" stroke-linecap="round" />
            <path d="M1.00024 10.0001L3.08847 1.00002" stroke="#020305" stroke-linecap="round" />
          </svg>
        </div>
        <div class="swiper-button-next">
          <svg
            width="4"
            height="20"
            viewBox="0 0 4 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.911621 19.0001L2.99985 10" stroke="#020305" stroke-linecap="round" />
            <path d="M2.99951 10.0001L0.911283 1.00002" stroke="#020305" stroke-linecap="round" />
          </svg>
        </div>
      </Swiper>

      <AppCard class="desktop_view" imgUrl="png/card2.png" title="ЖАКЕТ" price="12 990" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promo-single {
  width: 100%;
  height: 100vh;
  display: flex;

  .left {
    width: 40%;
    background-image: url('png/promo-single_left.png');
    background-size: cover;
  }

  .right {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .swiper {
      display: none;

      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 425px) {
  .promo-single {
    display: block;
    height: auto;

    .left,
    .right {
      width: 100%;
      height: 500px;
    }

    .right {
      .swiper {
        display: flex;
      }
      .desktop_view {
        display: none;
      }
    }
  }
}
</style>
