<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <h3 class="text-center font-semibold text-primary lg:mb-12 text-xl lg:text-3xl font-raleway">Hubungi Kami
    </h3>

    <div class="grid lg:grid-cols-2 gap-4 lg:gap-20 items-center pt-10">
      <div class="mb-12 flex justify-center">
        <img src="~/assets/images/personal_email.svg" alt="Personal Email"
          class="w-[100%] max-w-[300px] md:max-w-[400px] lg:max-w-[550px]" />
      </div>

      <div>
        <form @submit.prevent="handleSubmit" method="post" spellcheck="false">
          <InputText type="text" label="Nama Lengkap *" v-model="contact.fullName" placeholder="Masukkan Nama Lengkap"
            maxlength="50" :isInvalid="v$.fullName.$errors.length > 0">
            <div v-if="v$.fullName.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.fullName.$errors[0].$message }}
            </div>
          </InputText>

          <InputText type="text" label="Email *" v-model="contact.email" placeholder="Masukkan Email"
            :isInvalid="v$.pesan.$errors.length > 0">
            <div v-if="v$.email.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.email.$errors[0].$message }}
            </div>
          </InputText>

          <InputText type="text" label="Nomor Handphone *" v-model="contact.noHp" placeholder="Masukkan Nomor Handphone"
            :isInvalid="v$.noHp.$errors.length > 0">
            <div v-if="v$.noHp.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.noHp.$errors[0].$message }}
            </div>
          </InputText>

          <InputArea label="Pesan *" v-model="contact.pesan" placeholder="Masukkan Pesan"
            :isInvalid="v$.pesan.$errors.length > 0">
            <div v-if="v$.pesan.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.pesan.$errors[0].$message }}
            </div>
          </InputArea>

          <div class="mb-6 mt-4 lg:mt-8 flex justify-center">
            <button type="submit"
              class="text-white bg-primary hover:bg-[#cf5040] font-medium tracking-widest text-sm rounded-lg px-7 py-2.5 mr-2 mb-2 ">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers, minLength, maxLength, numeric } from '@vuelidate/validators';

useHead({
  title: 'Rellocate Dubai - Contact Us'
})

const contact = ref({
  fullName: '',
  email: '',
  noHp: '',
  pesan: ''
})

const rules = {
  fullName: {
    required: helpers.withMessage('Harap isi Nama Lengkap', required),
    minLength: helpers.withMessage(({ $params }) => `Nama Lengkap minimal ${$params.min} karakter`, minLength(3)),
    maxLength: helpers.withMessage(({ $params }) => `Nama Lengkap maksimal ${$params.max} karakter`, maxLength(50)),
    $autoDirty: true
  },
  email: {
    required: helpers.withMessage('Harap isi Email', required),
    email: helpers.withMessage('Email tidak valid', email),
    $autoDirty: true,
  },
  noHp: {
    required: helpers.withMessage('Harap isi Nomor Handphone', required),
    numeric: helpers.withMessage('Nomor Handphone tidak valid', numeric),
    minLength: helpers.withMessage(({ $params }) => `Nomor Handphone minimal ${$params.min} karakter`, minLength(10)),
    maxLength: helpers.withMessage(({ $params }) => `Nomor Handphone maksimal ${$params.max} karakter`, maxLength(15)),
    $autoDirty: true,
  },
  pesan: {
    required: helpers.withMessage('Harap isi Pesan', required),
    $autoDirty: true,
  },
}

const v$ = useVuelidate(rules, contact)

const handleSubmit = () => {
  console.log('handle submit')

  v$.value.$touch();

  if (v$.value.$invalid) return;

  contact.value.fullName = ''
  contact.value.email = ''
  contact.value.noHp = ''
  contact.value.pesan = ''

  v$.value.$reset() // clear message dan reset

}
</script>