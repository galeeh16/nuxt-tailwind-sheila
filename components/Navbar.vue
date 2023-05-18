<template>
  <nav class="bg-black border-gray-200 py-2 lg:py-4 fixed z-30 top-0 left-0 right-0 md:block">
    <div class="flex flex-wrap items-center justify-between" :class="container">
      <a :href="localePath('/')" class="flex items-center">
        <img src="/BisnisDiDubai_Logo.png" class="h-[50px] md:h-[66px] lg:h-[80px]" alt="BisnisDiDubai Logo">
      </a>

      <button data-collapse-toggle="navbar-default" type="button" id="button-hamburger-menu"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6 text-primary" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col lg:items-center p-4 md:p-0 mt-4 bg-gray-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <nuxt-link :to="localePath('/')" @click="goTo(localePath('/'))"
              class="block mb-4 md:mb-0 py-2 pl-3 pr-4 rounded cursor-pointer"
              :class="route.path == localePath('/') ? 'text-primary' : 'text-gray-400'">{{ $t('home') }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/about')" @click="goTo(localePath('/about'))"
              class="block mb-4 md:mb-0 py-2 pl-3 pr-4 rounded cursor-pointer"
              :class="route.path == localePath('/about') ? 'text-primary' : 'text-gray-400'">{{ $t('profile')
              }}</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/services')" @click="goTo(localePath('/services'))"
              class="block mb-4 md:mb-0 py-2 pl-3 pr-4 rounded cursor-pointer"
              :class="route.path == localePath('/services') ? 'text-primary' : 'text-gray-400'">{{ $t('services') }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath('/contact')" @click="goTo(localePath('/contact'))"
              class="text-white inline-block bg-primary hover:bg-primaryHover focus:outline-none text-sm rounded-md mb-4 md:mb-0 px-3 py-2.5 text-center cursor-pointer">
              {{
                $t('contact_us') }}</nuxt-link>
          </li>
          <li>
            <lang-switcher />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { container } from '../constants/style'

const route = useRoute()
const router = useRouter()

function goTo(path) {
  const currentWidth = window.innerWidth
  if (currentWidth < 768) {
    let b = document.getElementById('button-hamburger-menu')
    b.click()
  }

  router.push(path)
}

</script>
