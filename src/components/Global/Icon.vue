<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  path: {
    type: String,
    default: "",
    required: true,
  },
  color: {
    type: String,
    default: "black",
  },
  size: {
    type: Number,
    default: 24,
  },
  flip: {
    type: String as PropType<"horizontal" | "vertical" | "both" | null>,
    default: null,
  },
  rotate: {
    type: String,
    default: "0deg",
  },
});
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
    <path :fill="color || 'fill-current'" :d="path" />
  </svg>
</template>
