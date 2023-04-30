<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 :title="$t('contact_us')" />

    <div class="grid lg:grid-cols-2 gap-4 lg:gap-20 items-center pt-10">
      <div class="mb-12 flex justify-center">
        <img src="~/assets/images/personal_email.svg" alt="Personal Email"
          class="w-[100%] max-w-[300px] md:max-w-[400px] lg:max-w-[550px]" />
      </div>

      <div>
        <form @submit.prevent="handleSubmit" method="post" spellcheck="false">
          <InputText type="text" :label="`${$t('contact_fullname') + ' *'}`" v-model="contact.fullName"
            :placeholder="`${$t('contact_fullname_placeholder')}`" maxlength="50"
            :isInvalid="v$.fullName.$errors.length > 0">
            <div v-if="v$.fullName.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.fullName.$errors[0].$message }}
            </div>
          </InputText>

          <InputText type="text" :label="`${$t('contact_email') + ' *'}`" v-model="contact.email"
            :placeholder="`${$t('contact_email_placeholder')}`" :isInvalid="v$.pesan.$errors.length > 0">
            <div v-if="v$.email.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.email.$errors[0].$message }}
            </div>
          </InputText>

          <InputText type="text" :label="`${$t('contact_nohp') + ' *'}`" v-model="contact.noHp"
            :placeholder="`${$t('contact_nohp_placeholder')}`" :isInvalid="v$.noHp.$errors.length > 0">
            <div v-if="v$.noHp.$errors.length > 0" class="text-red-500 mt-1 text-sm">
              {{ v$.noHp.$errors[0].$message }}
            </div>
          </InputText>

          <InputArea :label="`${$t('contact_message') + ' *'}`" v-model="contact.pesan"
            :placeholder="`${$t('contact_message')}`" :isInvalid="v$.pesan.$errors.length > 0">
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
import { requiredMsg, minLengthMsg, maxLengthMsg, emailMsg, numericMsg } from '../constants/localeMessageValidator'

const { t } = useI18n()

useHead({
  title: `Bisnis Di Dubai - ${t('contact_us')}`
})

const contact = ref({
  fullName: '',
  email: '',
  noHp: '',
  pesan: ''
})

const lang = useCookie('i18n_redirected').value || 'en'

const rules = {
  fullName: {
    required: helpers.withMessage(requiredMsg(lang, t('contact_fullname')), required),
    minLength: helpers.withMessage(({ $params }) => minLengthMsg(lang, t('contact_fullname'), $params), minLength(3)),
    maxLength: helpers.withMessage(({ $params }) => maxLengthMsg(lang, t('contact_fullname'), $params), maxLength(50)),
    $autoDirty: true
  },
  email: {
    required: helpers.withMessage(requiredMsg(lang, t('contact_email')), required),
    email: helpers.withMessage(emailMsg(lang, t('contact_email')), email),
    $autoDirty: true,
  },
  noHp: {
    required: helpers.withMessage(requiredMsg(lang, t('contact_nohp')), required),
    numeric: helpers.withMessage(numericMsg(lang, t('contact_nohp')), numeric),
    minLength: helpers.withMessage(({ $params }) => minLengthMsg(lang, t('contact_nohp'), $params), minLength(10)),
    maxLength: helpers.withMessage(({ $params }) => maxLengthMsg(lang, t('contact_nohp'), $params), maxLength(15)),
    $autoDirty: true,
  },
  pesan: {
    required: helpers.withMessage(requiredMsg(lang, t('contact_message')), required),
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