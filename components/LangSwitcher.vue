<template>
  <div class="flex gap-3 md:gap-4">
    <div @click="switchLang('id')" class="flex items-center gap-2 text-lg cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-id" viewBox="0 0 640 480">
        <path fill="#e70011" d="M0 0h640v240H0Z"></path>
        <path fill="#f4f5f6" d="M0 240h640v240H0Z"></path>
      </svg>
      <span v-if="selectedLang === 'id'" class="font-bold text-primary">ID</span>
      <span v-else>ID</span>
    </div>

    <div class="border border-l-0 border-y-0 border-r-gray-500 border-r-2"></div>

    <div @click="switchLang('en')" class="flex items-center gap-2 text-lg cursor-pointer">
      <svg xmlns=" http://www.w3.org/2000/svg" width="18" height="18" id="flag-icons-gb" viewBox="0 0 640 480">
        <path fill="#012169" d="M0 0h640v480H0z"></path>
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z">
        </path>
        <path fill="#C8102E"
          d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z">
        </path>
        <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"></path>
        <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"></path>
      </svg>
      <span v-if="selectedLang === 'en'" class="font-bold text-primary">EN</span>
      <span v-else>EN</span>
    </div>
  </div>
</template>

<script setup>
const { setLocale, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const router = useRouter()
const selectedLang = ref(useCookie('i18n_redirected').value == 'id' ? 'id' : 'en')

onMounted(() => {
  if (selectedLang.value.code === 'en') {
    router.push(switchLocalePath('en'))
  }
})

function switchLang(lang) {
  setLocale(lang)
  selectedLang.value = lang

  const currentWidth = window.innerWidth
  if (currentWidth < 768) {
    let b = document.getElementById('button-hamburger-menu')
    b.click()
  }

  router.push(switchLocalePath(lang))
  // window.location.href = switchLocalePath(lang.code)
}
</script>