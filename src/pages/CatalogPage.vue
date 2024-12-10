<script setup>
import CatalogCard from '@/components/CatalogCard.vue'
import { ref } from 'vue'

const activeIndex = ref(0)
const categories = [
  'Все украшения',
  'Серьги',
  'Кольца',
  'Браслеты',
  'Цепочки',
  'Сеты',
  'Пояса',
  'Чокеры',
]

const chooseActive = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="container">
    <div class="categories">
      <h2>Категории</h2>
      <ul>
        <li
          v-for="(category, index) in categories"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="chooseActive(index)"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="gallery">
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  font-family: 'Manrope';
  color: #5d4839;
  display: flex;

  .categories {
    width: 300px;
    margin: 20px 120px;

    h2 {
      width: 300px;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;
      padding-bottom: 25px;
      margin-bottom: 25px;
      border-bottom: 1px solid #baa391;
    }

    ul {
      display: inline-block;
      font-size: 18px;

      li {
        margin: 20px 0;
        cursor: pointer;

        &.active {
          font-weight: 600;
        }
      }
    }
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 425px) {
  .container {
    flex-direction: column;
    .categories {
      width: auto;
      margin: 0px auto;
    }
  }
}
</style>
