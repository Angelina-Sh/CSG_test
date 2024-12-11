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
        { imgUrl: 'public/png/card.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
        { imgUrl: 'public/png/card.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
        { imgUrl: 'public/png/card.png', title: 'ДЖИНСОВЫЙ КОСТЮМ', price: '12 990' },
      ],
      modules: [Navigation],
    }
  },
}
</script>

<template>
  <div class="catalog">
    <Swiper
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :loop="true"
      :modules="modules"
    >
      <SwiperSlide v-for="(photo, index) in photos" :key="index">
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
    <div class="desktop_view">
      <AppCard
        v-for="(photo, index) in photos"
        :key="index"
        :imgUrl="photo.imgUrl"
        :title="photo.title"
        :price="photo.price"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  width: 100%;
  height: 100vh;
  .swiper {
    display: none;
  }
  .desktop_view {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 768px) {
  .catalog {
    height: auto;
    .swiper {
      display: flex;
    }
    .desktop_view {
      display: none;
    }
  }
}
</style>
