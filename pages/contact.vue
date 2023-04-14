<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <h3 class="text-center font-semibold text-primary lg:mb-12 text-xl lg:text-3xl font-raleway">Hubungi Kami
    </h3>

    <div class="grid lg:grid-cols-2 items-center pt-10">
      <div class="mb-12 flex justify-center">
        <img src="~/assets/images/personal_email.svg" alt="Personal Email"
          class="w-[100%] max-w-[300px] md:max-w-[400px] lg:max-w-[550px]" />
      </div>

      <div>
        <form @submit.prevent="handleSubmit" method="post" spellcheck="false">
          <div class="mb-6">
            <label for="fullName" class="block mb-2 text-sm font-medium text-slate-600">Nama Lengkap *</label>
            <input type="text" id="fullName" autocomplete="off"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:bg-white focus:border-primary block w-full p-2.5 outline-none"
              placeholder="Masukkan Nama Lengkap">
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-slate-600">Email *</label>
            <input type="text" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:bg-white focus:border-primary block w-full p-2.5 outline-none"
              placeholder="Masukkan Email">
          </div>
          <div class="mb-6">
            <label for="noHp" class="block mb-2 text-sm font-medium text-slate-600">Nomor Handphone *</label>
            <input type="text" id="noHp"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:bg-white focus:border-primary block w-full p-2.5 outline-none"
              placeholder="Masukkan Nomor Handphone">
          </div>
          <div class="mb-6">
            <label for="pesan" class="block mb-2 text-sm font-medium text-slate-600">Pesan *</label>
            <textarea type="text" id="pesan" autocomplete="off"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:bg-white focus:border-primary block w-full p-2.5 outline-none resize-none"
              rows="4" placeholder="Masukkan Pesan"></textarea>
          </div>
          <div class="mb-6">
            <button type="submit"
              class="text-white bg-primary hover:bg-[#cf5040] font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'

const handleSubmit = () => {
  console.log('handle submit')
}
</script>