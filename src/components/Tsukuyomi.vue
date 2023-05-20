<script setup lang="ts">
import { ref } from 'vue';

const status = ref([
  { title: "Vida", inicio: 10, proximo: 8 },
  { title: "Defesa", inicio: 0, proximo: 1 },
  { title: "Ataque", inicio: 3, proximo: 1 },
  { title: "Poder", inicio: 4, proximo: 2 },
  { title: "Sanidade", inicio: 4, proximo: 4 }
])

</script>

<template>
  <div class="flex gap-16">
    <!-- Descrição -->
    <div class="flex-initial w-full flex flex-col gap-2 relative">
      <h2 class="text-lg font-bold">Tsukuyomi</h2>
      <p>Todos aqueles estão sobre o brilho de Tsukuyomi a
        encarnação da lua são abençoados com enorme poder e
        força de destruição, sendo exímios conjuradores e
        controladores. Sua <strong>Cartas</strong> e <strong>Talentos</strong> são voltas para
        dano em área, movimentação e amplificadores de dano.</p>
      <p>Os herdeiros desa linhagem possuem muita poder e ataque, sendo um dos melhor causadores de dano das linhagens,
        mas além disso tem um bom ciclo de vida a distancia conseguindo apoiar muito bem o time de posições estratégicas.
      </p>
      <br>
      <h2 class="text-lg font-bold">Caminho de Sangue</h2>
      <p>Assim que o herdeiro segue o caminho de Tsukuyomi, ele
        percebe que seu poder flui muito mais livre em seu
        corpo, <strong>qualquer efeito de dano usado em uma carta tem
          um adicional de dano equivalente a metade de seus poder
          total</strong>, além disso o herdeiro começa a conseguir liberar
        seus poderes de forma simples e eficiente, podendo escolher entre feixes de poder e raja mais focada, essa escolha
        pode ter
        alterada toda vez que entrar no purgatório. A aparencia do seu poder e energia é livre para cada herdeiro.</p>
      <p><strong>Feixe de erergia</strong> causan dano equivalentes a 2D4 em 2 alvos diferentes e possuem alcance de
        corpo-a-corpo até 12m.</p>
      <p><strong>Rajada focada</strong> causan dano equivalentes a 2D8 e possuem alcance de corpo-a-corpo até 10m.
      </p>
      <br>
      <h3 class="border-b font-bold">Especialização</h3>
      <p>No nível 1, o poder do herdeiro passa por uma
        transformação drástica, podendo ganhar uma
        característica a seguir:</p>
      <p><strong>Destrutivo</strong>: os ataques normais ignoraram a resistência
        natural do alvo, o herdeiro também pode usar esse efeito em uma
        carta que cause dano, gastando poder equivalente ao
        nível dela.</p>
      <p><strong>Eficiente</strong>: uma vez por turno o herdeiro pode reduzir o custo de
        uma carta pela metade (arredondado para cima). Além
        disso toda vez que matar um inimigo restaura 1 de poder.</p>

      <br>
      <h3 class="border-b font-bold">Reforço de feitiçaria</h3>
      <p>No nível 2, quando o herdeiro usar uma carta em sua
        ação padrão, ele pode utilizar mais uma como parte da
        sua ação.</p>

      <br>
      <h3 class="border-b font-bold">Aprimoramento da Lua</h3>
      <p>No nível 3, Escolhe um Atributo do personagem para
        ganhar +1, com esse ponto melhorado o herdeiro pode se
        utilizar da conversão de atributos para fazer um
        aprimoramento forçado. </p>

      <br>
    </div>
    <!-- Status -->
    <div class="flex-none w-[260px] relative">
      <div class="absolute  h-full top-0">
        <div class="sticky top-[30px] flex flex-col gap-2 text-sm">
          <h3 class="text-base font-bold">Status de Herança</h3>
          <p>Estatistificas de atributos melhoradas de um herdeiro de Tsukuyomi e sua evolução</p>
          <br>
          <div>
            <h4 class="text-base border-b font-bold">Armadura</h4>
            <div class="flex justify-between">
              <p>Inicial:</p>
              <p>13 + Defesa</p>
            </div>
          </div>
          <div v-for="s in status">
            <h4 class="text-base border-b font-bold">{{ s.title }}</h4>
            <div class="flex justify-between">
              <p>Primeiro Nível:</p>
              <p>+{{ s.inicio }}</p>
            </div>
            <div class="flex justify-between">
              <p>Níveis Adicionais:</p>
              <p>+{{ s.proximo }}</p>
            </div>
          </div>
          <div>
            <h4 class="text-base border-b font-bold">Dano</h4>
            <div>Qualquer elementos que
              cause dano a um alvo o
              herdeiro pode adicionar
              sua “Capacidade Mental” a
              soma do valor.</div>
          </div>
          <div class="ml-10">
            <br>
            <p class="italic text-end">“Quanto maior é o seu
              poder mais difícil se
              torna ignorar suas
              responsabilidades”</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
