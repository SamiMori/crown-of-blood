<script setup lang="ts">
import { ref } from "vue";

const hell = ref(
  "https://media.gqitalia.it/photos/6006a0fa128e8e554449155e/16:9/w_1280,c_limit/kqp1d0xjdziy17lx0emt.jpeg"
);
</script>

<template>
  <article class="flex justify-center">
    <div class="max-w-[1000px] flex flex-col gap-4">
      <div
        :style="`background-image: url('${hell}')`"
        class="w-full h-[200px] bg-no-repeat bg-center bg-cover"
      />

      <h2 class="text-lg font-bold">Introdução</h2>

      <p>
        Coroa de Sangue é uma RPG escolar com elementos sobrenaturais e
        fantasiosos que se passa em um universo equivalente ao nosso em questões
        culturais e tecnológicas, se localizando propriamente dito em Hyogo no
        Japão em 2022, além disso Coroa de Sangue é um RPG muito focado na
        narrativa, e isso não quer dizer somente do mestre mas também dos
        personagem, seus problemas e conquistas, afinal são todos humanos e
        adolescentes caminhando pro início das suas responsabilidades. De forma
        mais simplificada, imagine que essa é uma história interativa de
        adolescentes descobrindo o mágico e o sobrenatural, onde é muito
        importante suas reações e interações com seres do outro lado da porta e
        a dessa.
      </p>

      <p>
        Em Coroa de Sangue, os personagem que possuem a habilidade de abrir
        portas para o outro lado são chamados de “Herdeiros”, pois só um
        herdeiro da coroa tem em seu sangue a chave para abrir as porta para o
        “Purgatório”. Todos os personagem dos jogadores serão em algum momento
        classificados como herdeiros.
      </p>

      <p>
        Se tratando dos elementos sobrenaturais e fantasiosos, o jogo tem como
        base os demônios que cada pessoa carrega e seus medos refletidos no
        purgatório, sendo função dos herdeiro barrar a saída dessas criaturas e
        até purificar se desejar.
      </p>

      <p>
        Além disso os herdeiros se alimentam do purgatório, consumindo as
        criaturas e se fortalecendo, melhorando suas característica tanto dentro
        do purgatório quanto no mundo material. Esse vinculo do herdeiro com o
        purgatório acaba criando um ciclo de vida onde o herdeiro se utilizar do
        purgatório para se alimenta enquanto o purgatório se utilizar do
        herdeiro para controle populacional, um herdeiro que deixa de se
        alimentar acaba ficando mais fraco e atraindo mais demônios para sua
        porta.
      </p>
    </div>
  </article>
</template>
