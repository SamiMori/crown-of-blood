<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
	path: {
		type: String,
		default: '',
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
		type: String as PropType< "horizontal"| "vertical"| "both"| null> ,
		default: null,
	},
	rotate: {
		type: String,
		default: "0deg",
	},
});
</script>

<template>
  <svg-icon type="mdi" :path="path" :size="size" :flip="flip" :rotate="rotate" :style="`color: ${color}`"></svg-icon>
</template>
