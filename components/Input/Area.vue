<template>
  <div class="mb-6">
    <label for="pesan" class="block mb-2 text-sm font-medium text-slate-400">{{ props.label }}</label>
    <textarea type="text" id="pesan" autocomplete="off"
      class="border border-slate-600 text-sm text-slate-200 rounded-lg bg-slate-700 focus:ring-blue-600 focus:bg-slate-800 focus:border-blue-600 block w-full p-2.5 outline-none resize-none"
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