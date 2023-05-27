<script setup lang="ts">
import { ref, computed } from "vue";
import Icon from "../components/Global/Icon.vue";
import { mdiChevronRight } from "@mdi/js";
import { RouterView, RouterLink, useRoute } from "vue-router";

const amaterasu = ref(
  "https://f8n-ipfs-production.imgix.net/QmZhVpXTFYKo7E8rEyGK5DVahsZYHSAGY6L9pemY29pHhM/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
);
const tsukuyomi = ref(
  "https://f8n-ipfs-production.imgix.net/Qmdsd5iW3Vi2DsdUYtKhoERUh7e4nFJFLhyXKDS8bdwwAf/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
);
const susanoo = ref(
  "https://f8n-ipfs-production.imgix.net/QmczQgCxW6Gzx6YnE4qpyMCeHnFZnSJTJPCAVc6N97crHz/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max"
);

const titleNav = computed(() => {
  switch (index.value) {
    case 0:
      return "Amaterasu";
    case 1:
      return "Tsukuyomi";
    case 2:
      return "Susanoo";

    default:
      return null;
  }
});

const titleNavColor = computed(() => {
  switch (index.value) {
    case 0:
      return "text-red-500";
    case 1:
      return "text-teal-500";
    case 2:
      return "text-sky-500";

    default:
      return null;
  }
});
const index = computed(() => {
  switch (currentRouteName.value) {
    case "Amaterasu":
      return 0;
    case "Tsukuyomi":
      return 1;
    case "Susanoo":
      return 2;
    default:
      return null;
  }
});

const currentRouteName = computed(() => useRoute().name);
</script>

<template>
  <article class="flex justify-center">
    <div class="flex-initial w-[1000px] flex flex-col gap-4">
      <div class="flex items-center text-sm text-[#8a8a8a] cursor-pointer mb-4">
        <Icon :path="mdiChevronRight" color="#8a8a8a" />
        <p class="hover:text-white" @click="index == null">
          <RouterLink :to="{ name: 'Heranças' }"> Heranças </RouterLink>
        </p>
        <Icon v-if="titleNav" :path="mdiChevronRight" color="#8a8a8a" />
        <p v-if="titleNav" :class="titleNavColor">{{ titleNav }}</p>
      </div>
    </div>
  </article>
  <article v-if="index == null" class="flex justify-center">
    <div class="max-w-[1000px] flex flex-col gap-4">
      <h2 class="text-lg font-bold">Herança</h2>
      <p>
        A heranças determina a base do seu estilo de combate, na sua primeira
        vez dentro do purgatório o herdeiro recebe tanto sua transformação
        quanto sua heranças. Existem 3 ramificações para o herdeiro escolher
        inicialmente, sendo eras <strong>Amaterasu</strong>,
        <strong>Tsukuyomi</strong> e <strong>Susanoo</strong>.
      </p>
      <p>
        Nas mecânicas do jogo os herdeiros podem ter níveis que começam no 1 e
        se estendem até 7. Cada nível do herdeiro desbloqueia alguns conjuntos
        de habilidades.
      </p>
      <p>
        Cada Herança ira fornecer algumas característica iniciais (caminho de
        sangue), melhorias dos atributos de combates, talentos e cartas.
      </p>
      <p>
        <strong>Caminho de Sangue</strong>, é a estrutura de sua herança dando a
        base de suas habilidades e bônus de atributos, o caminho de sangue
        demostra a função mais simples e favorável em um combate para o herdeiro
        mas não limita a essa posição, por exemplo a herança de Amaterasu ira
        conceder tudo que for necessário par um combate de linha de frente, mas
        não impede ele de ser um atirador na vanguarda de seu time.
      </p>

      <div class="flex justify-center gap-20 mt-6">
        <RouterLink :to="{ name: 'Amaterasu' }">
          <button
            class="
              border
              hover:border-2 hover:border-red-500
              hover:text-red-500
              hover:font-bold
              p-3
              rounded-full
              w-[120px]
              h-[50px]
            "
          >
            Amaterasu
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'Tsukuyomi' }">
          <button
            class="
              border
              hover:border-2 hover:border-teal-500
              hover:text-teal-500
              hover:font-bold
              p-3
              rounded-full
              w-[120px]
              h-[50px]
            "
          >
            Tsukuyomi
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'Susanoo' }">
          <button
            class="
              border
              hover:border-2 hover:border-sky-500
              hover:text-sky-500
              hover:font-bold
              p-3
              rounded-full
              w-[120px]
              h-[50px]
            "
          >
            Susanoo
          </button>
        </RouterLink>
      </div>

      <div class="flex justify-center">
        <div
          :style="`background-image: url('${amaterasu}')`"
          class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover"
        />
        <div
          :style="`background-image: url('${tsukuyomi}')`"
          class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover"
        />
        <div
          :style="`background-image: url('${susanoo}')`"
          class="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover"
        />
      </div>
    </div>
  </article>
  <article v-else class="flex justify-center">
    <div class="max-w-[1000px]">
      <RouterView />
    </div>
  </article>
</template>
