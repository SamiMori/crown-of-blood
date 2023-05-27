<script setup lang="ts">
import { ref } from "vue";
import { RouterView, RouterLink } from "vue-router";

const navigation = ref([
  "Mundo",
  "Mecânicas",
  "Heranças",
  "Bençãos",
  "Cartas",
  "Personagem",
  "Ficha",
]);
</script>

<template>
  <div class="w-full h-screen font-mono text-white">
    <header class="uppercase font-bold text-2xl flex justify-center py-4">
      <div class="text-center">
        <h1>Coroa de Sangue</h1>
        <p class="text-base">Império das sombras</p>
      </div>
    </header>
    <nav>
      <ul class="flex justify-center gap-x-4">
        <RouterLink
          v-for="n in navigation"
          :key="n"
          :to="{ name: n }"
          v-slot="{ isActive }"
        >
          <li
            class="hover:font-extrabold font-medium cursor-pointer"
            :class="isActive ? 'text-red-500 font-extrabold' : ''"
          >
            {{ n }}
          </li>
        </RouterLink>
      </ul>
    </nav>
    <main class="p-6">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  background-color: #3a3a3a;
}
</style>
