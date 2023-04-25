<template>
  <nav class="bg-white border-gray-200  py-4 lg:py-8 fixed z-30 top-0 left-0 right-0 md:block border-b border-b-gray-200">
    <div class="flex flex-wrap items-center justify-between" :class="container">
      <a href="/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold font-raleway whitespace-nowrap">Rellocate
          Dubai</span>
      </a>

      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <div class="hidden w-full bg-white md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col lg:items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li>
            <nuxt-link to="/" class="block py-2 pl-3 pr-4 rounded"
              :class="route.path == '/' ? 'text-primary' : 'text-gray-600'">Beranda</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded"
              :class="route.path == '/about' ? 'text-primary' : 'text-gray-600'">Profil</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services" class="block py-2 pl-3 pr-4 text-gray-900 rounded"
              :class="route.path == '/services' ? 'text-primary' : 'text-gray-600'">Layanan</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact"
              class="text-white bg-primary hover:bg-primaryHover focus:outline-none text-sm rounded-md px-3 py-2.5 text-center">Hubungi
              Kami</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { container } from '../constants/style'

const route = useRoute()

</script>
