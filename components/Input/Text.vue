<template>
  <div class="mb-6">
    <label class="block mb-2 text-sm font-medium text-slate-400">{{ props.label }}</label>
    <input
      class="border border-slate-600 text-sm text-slate-200 rounded-lg bg-slate-700 focus:ring-blue-400 focus:bg-slate-800 focus:border-blue-600 block w-full p-2.5 outline-none"
      :value="props.modelValue" @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs"
      :class="isInvalid ? 'border-red-500' : 'border-slate-600'">
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