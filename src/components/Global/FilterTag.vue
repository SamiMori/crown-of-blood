<script setup lang="ts">
const props =
  defineProps<{
    modelValue: string;
    list: any[];
  }>();
const emit = defineEmits(["update:modelValue"]);

function select(text: any) {
  if (text == props.modelValue) {
    emit("update:modelValue", "");
  } else {
    emit("update:modelValue", text);
  }
}
</script>

<template>
  <div class="flex gap-2">
    <div
      v-for="t in props.list"
      class="border p-1 rounded-full hover:bg-[#5c5c5c] h-[34px] cursor-pointer"
      @click="select(t)"
      :class="t == props.modelValue ? 'border-2 bg-[#5c5c5c]' : ''"
    >
      <p class="px-3">{{ t }}</p>
    </div>
  </div>
</template>
