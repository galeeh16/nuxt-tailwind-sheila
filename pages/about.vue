<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 title="Profile" />

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-12 lg:mt-16 mb-14 lg:mb-28">
      <div>
        <img :src="SheilaJpg" class="max-w-[400px] lg:max-w-[350px]" />
      </div>
      <div>
        <p class="font-semibold text-xl mb-4 uppercase tracking-widest">Sheila Parubets</p>
        <p class="mb-8">REGIONAL OPERATIONS DIRECTOR, ASIA-PAC/MIDDLE EAST/AFRICA</p>

        <p class="mb-4">
          Sheila telah bekerja dalam mobilitas global selama hampir satu dekade.
          Dia memimpin tim konsultan yang berkomitmen di seluruh Asia Pasifik, Timur Tengah, dan UEA
          pada khususnya.</p>
        <p class="mb-4">Dia memiliki rekam jejak yang terbukti dalam bekerja dengan perusahaan internasional dan karyawan
          di semua tingkatan, memberikan konsultasi untuk investasi dan persiapan bisnis.</p>
        <p class="mb-4">Dengan pengalaman pribadi sebagai ekspatriat yang tinggal dan bekerja di sejumlah negara yang
          berbeda
          dan sebagai
          investor properti, dia telah memilih untuk mengikuti hasratnya untuk membagikan pengetahuannya, jaringan dan
          dukungan untuk individu dan bisnis yang ingin meraih peluang baru.</p>
        <p class="mb-4">
          Berpassion tentang mobilitas internasional, relokasi dan investasi properti. Sheila senang
          untuk membantu dan akan ada untuk Anda di setiap langkahnya.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'
import SheilaJpg from '~/assets/images/Sheila-Parubets.jpg'

useHead({
  title: 'Rellocate Dubai - Profile'
})
</script>