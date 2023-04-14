<template>
  <Navbar />
  <div>
    <slot />
  </div>

  <ClientOnly>
    <transition name="fadetop">
      <div id="pagetop" class="fixed p-2 bg-primary text-white rounded-full hover:bg-[#d24b39]"
        style="bottom: 34px; right: 34px; cursor: pointer;" v-show="scY > 300" @click="toTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="feather feather-arrow-up">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </div>
    </transition>
  </ClientOnly>

  <Footer />
</template>

<script setup>
import { initFlowbite } from 'flowbite'

const scTimer = ref()
const scY = ref()

function handleScroll() {
  if (scTimer.value) return;

  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initFlowbite();
})
</script>
