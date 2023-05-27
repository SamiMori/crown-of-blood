<script setup lang="ts">
import { ref, computed } from "vue";
import Search from "./Global/Search.vue";
import FilterTag from "./Global/FilterTag.vue";
import carta from "../data/carta.json";

const search = ref("");
// const tagList = ref(["Luz", "Sombra", "Vida", "Morte", "Ordem", "Caos"]);
const tagList = ref(["Amaterasu", "Tsukuyomi", "Susanoo"]);
const tag = ref("");

const listSearch = computed(() => {
  if (search.value.length > 0) {
    return carta.filter((b) => {
      return (
        b.desc.toUpperCase().includes(search.value.toUpperCase()) ||
        b.titulo.toUpperCase().includes(search.value.toUpperCase()) ||
        b.origem.toUpperCase().includes(search.value.toUpperCase())
      );
    });
  }
  return carta;
});

const cartaFiltro = computed(() => {
  if (tag.value.length > 0) {
    return listSearch.value.filter((b) => {
      return b.heranca
        .toUpperCase()
        .includes(tag.value.slice(0, 1).toUpperCase());
    });
  }
  return listSearch.value;
});

function heranca(deck: string) {
  switch (deck) {
    case "A":
      return "Amaterasu";
    case "T":
      return "Tsukuyomi";
    default:
      return "Susanoo";
  }
}

function herancaColor(deck: string) {
  switch (deck) {
    case "A":
      return "bg-red-500";
    case "T":
      return "bg-teal-500";
    default:
      return "bg-sky-500";
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <h3 class="border-b font-bold mt-6">Lista de Cartas</h3>
    <div class="flex gap-2">
      <Search v-model:search="search" />
      <FilterTag v-model="tag" :list="tagList" />
    </div>
    <br />
    <div class="grid grid-cols-2 gap-4 gap-y-10">
      <div v-for="c in cartaFiltro" class="border rounded-lg py-2 relative">
        <div
          class="absolute top-[-25px] left-[20px] px-4 rounded-t-xl"
          :class="herancaColor(c.heranca)"
        >
          {{ heranca(c.heranca) }}
        </div>
        <div class="border-b px-4 py-1 flex justify-between">
          <p>{{ c.titulo }}</p>
          <div>[{{ c.origem }}]</div>
        </div>
        <div class="flex justify-between px-2 pt-1 text-sm">
          <p><strong>Poder:</strong> {{ c.custo }}</p>
          <p><strong>Requisito:</strong> {{ c.req }}</p>
        </div>
        <p class="text-sm px-2 pt-2">{{ c.desc }}</p>
      </div>
    </div>
  </div>
</template>
