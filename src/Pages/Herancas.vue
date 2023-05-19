<script setup lang="ts">
import { ref } from 'vue';
// import Icon from "../components/Global/Icon.vue"
// import { mdiWhiteBalanceSunny, mdiMoonWaxingCrescent, mdiWeatherWindy } from '@mdi/js';

const index = ref(0)
const amaterasu = ref("https://f8n-ipfs-production.imgix.net/QmZhVpXTFYKo7E8rEyGK5DVahsZYHSAGY6L9pemY29pHhM/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max")
const tsukuyomi = ref("https://f8n-ipfs-production.imgix.net/Qmdsd5iW3Vi2DsdUYtKhoERUh7e4nFJFLhyXKDS8bdwwAf/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max")
const susanoo = ref("https://f8n-ipfs-production.imgix.net/QmczQgCxW6Gzx6YnE4qpyMCeHnFZnSJTJPCAVc6N97crHz/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max")
</script>

<template>
  <article class="flex justify-center">
    <div class="max-w-[1000px] flex flex-col gap-4">
      <h2 class="text-lg font-bold">Herança</h2>
      <p>A heranças determina a base do seu estilo de combate, na sua primeira vez dentro do purgatório o herdeiro recebe
        tanto sua transformação quanto sua heranças. Existem 3 ramificações para o herdeiro escolher inicialmente, sendo
        eras <strong>Amaterasu</strong>, <strong>Tsukuyomi</strong> e <strong>Susanoo</strong>.</p>
      <p>Nas mecânicas do jogo os herdeiros podem ter níveis que começam no 1 e se estendem até 7. Cada nível do herdeiro
        desbloqueia alguns conjuntos de habilidades.</p>
      <p>Cada Herança ira fornecer algumas característica iniciais (caminho de sangue), melhorias dos atributos de
        combates, talentos e cartas.</p>
      <p><strong>Caminho de Sangue</strong>, é a estrutura de sua herança dando a base de suas habilidades e bônus de
        atributos, o caminho de sangue demostra a função mais simples e favorável em um combate para o herdeiro mas não
        limita a essa posição, por exemplo a herança de Amaterasu ira conceder tudo que for necessário par um combate de
        linha de frente, mas não impede ele de ser um atirador na vanguarda de seu time.</p>

      <div class="flex justify-center gap-20 mt-6">
        <button @click="index = 0"
          class="border hover:border-2 hover:border-red-500 hover:text-red-500 hover:font-bold p-3 rounded-full w-[120px] h-[50px]">
          Amaterasu
        </button>
        <button @click="index = 1"
          class="border hover:border-2 hover:border-teal-500 hover:text-teal-500 hover:font-bold p-3 rounded-full w-[120px] h-[50px]">
          Tsukuyomi
        </button>
        <button @click="index = 2"
          class="border hover:border-2 hover:border-sky-500 hover:text-sky-500 hover:font-bold p-3 rounded-full w-[120px] h-[50px]">
          Susanoo
        </button>
      </div>

      <div class="flex justify-center">
        <div :style="`background-image: url('${amaterasu}')`" class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover" />
        <div :style="`background-image: url('${tsukuyomi}')`" class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover" />
        <div :style="`background-image: url('${susanoo}')`" class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover" />
      </div>
  </div>
</article></template>