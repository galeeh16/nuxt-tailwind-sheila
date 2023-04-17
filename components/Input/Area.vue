<template>
  <div class="mb-6">
    <label for="pesan" class="block mb-2 text-sm font-medium text-slate-600">{{ props.label }}</label>
    <textarea type="text" id="pesan" autocomplete="off"
      class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:bg-white focus:border-blue-600 block w-full p-2.5 outline-none resize-none"
      :class="isInvalid ? 'border-red-500' : 'border-gray-300'" rows=" 4" placeholder="Masukkan Pesan"
      @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"></textarea>

    <slot />
  </div>
</template>
  
<script setup>

const props = defineProps({
  label: {
    required: true,
    type: String
  },
  modelValue: {
    required: true,
    type: [String, Number],
    default: ''
  },
  isInvalid: {
    type: Boolean,
    default: true
  }
})
</script>