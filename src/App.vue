<script setup>
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'
import AppFooter from './components/AppFooter.vue'

window.addEventListener('DOMContentLoaded', () => {
  // Функционал меню
  const menu = document.getElementById('menu')
  const toggleElems = document.querySelectorAll('.toggleMenu')

  document.addEventListener('mousedown', (event) => {
    if (
      menu &&
      !menu.contains(event.target) &&
      ![...toggleElems].some((elem) => elem.contains(event.target))
    ) {
      menu.classList.remove('open')
    }
  })

  toggleElems.forEach((elem) => {
    elem.addEventListener('click', () => {
      menu.classList.toggle('open')
    })
  })

  //Функционал кнопки "наверх"
  const toTopButton = document.getElementById('arrowUp')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      toTopButton.classList.add('show')
    } else {
      toTopButton.classList.remove('show')
    }
  })
  toTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
</script>

<template>
  <AppMenu />
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>
