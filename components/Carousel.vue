<template>
  <ClientOnly>
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation :pagination="{ clickable: true }"
      effect="fade" :scrollbar="{ draggable: true, hide: true }" :loop="true">
      <swiper-slide>
        <img src="~/assets/images/dubai2.webp" class="h-[470px] lg:h-[780px] w-full object-cover" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/images/dubai1.webp" class="h-[470px] lg:h-[780px] w-full object-cover" loading="lazy" />
      </swiper-slide>
      <swiper-slide>
        <img src="~/assets/images/dubai3.webp" class="h-[470px] lg:h-[780px] w-full object-cover" loading="lazy" />
      </swiper-slide>
    </swiper>
  </ClientOnly>
</template>

<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade]
</script>

<style>
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ef5744;
}

.swiper-pagination .swiper-pagination-bullet {
  opacity: 0.8 !important;
  background: #fff;
}

/* untuk arrow */
.swiper-button-next,
.swiper-button-prev {
  color: #dfdfdf;
}
</style>