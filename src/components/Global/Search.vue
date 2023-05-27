<script setup lang="ts">
import Icon from "./Icon.vue";
import { mdiMagnify } from "@mdi/js";

defineProps<{
  search: string;
}>();
const emit = defineEmits(["update:search"]);

function onInput(text: string) {
  emit("update:search", text);
}
</script>

<template>
  <div>
    <div class="flex border rounded-full w-min p-1 px-3">
      <Icon :path="mdiMagnify" color="#fff" class="mr-2" />
      <input
        type="text"
        class="bg-transparent outline-0"
        :value="search"
        @input="onInput(($event.target as HTMLInputElement).value)"
        placeholder="Pesquisar..."
      />
    </div>
  </div>
</template>
