<script setup lang="ts">
import BencaoLista from "../components/BencaoLista.vue";
</script>

<template>
  <article class="flex justify-center">
    <div class="max-w-[1000px] flex gap-16">
      <div class="flex-initial w-full flex flex-col gap-2 relative">
        <h2 class="text-lg font-bold">Benção</h2>

        <p>
          Benção são melhorias vindo do purgatório para o herdeiro, pode-se
          pensar neles como amuletos com habilidades que podem ser trocadas no
          purgatório, todos os talentos tem requisitos para adquiri-los como por
          exemplo nível,além disso existem um quantidade máxima para talentos
          ativos no momento, sendo equivalente ao nível do herdeiro, conjuntos
          de talentos podem desbloquear outra habilidade.
        </p>

        <p>
          As bênçãos são comumente divididas por 6 fontes de origem sendo elas:
          <strong>Luz, Sombra, Vida, Morte, Ordem e Caos</strong>. Ao formar
          conjuntos de bençãos do mesmo tipo o herdeiro recebe um sub
          habilidades vindo dessas origens.
        </p>

        <BencaoLista />
      </div>
      <div class="flex-none w-[260px] relative">
        <div class="absolute h-full top-0">
          <div class="sticky top-[30px] flex flex-col gap-2 text-sm">
            <h3 class="border-b font-bold">Luz</h3>
            <p>2 conjunto de Luz [...].</p>
            <h3 class="border-b font-bold mt-6">Sombra</h3>
            <p>2 conjunto de Sombra [...].</p>
            <h3 class="border-b font-bold mt-6">Vida</h3>
            <p>2 conjunto de Vida aumenta a vida máxima em 5 * nível.</p>
            <h3 class="border-b font-bold mt-6">Morte</h3>
            <p>2 conjunto de Morte transforma seu 19 em critico.</p>
            <h3 class="border-b font-bold mt-6">Ordem</h3>
            <p>2 conjunto de Ordem [...].</p>
            <h3 class="border-b font-bold mt-6">Caos</h3>
            <p>2 conjunto de Caos [...].</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
