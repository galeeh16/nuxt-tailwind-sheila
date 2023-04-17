<template>
  <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-slate-600">{{ props.label }}</label>
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:bg-white focus:border-blue-600 block w-full p-2.5 outline-none"
      :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"
      :class="isInvalid ? 'border-red-500' : 'border-gray-300'">
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