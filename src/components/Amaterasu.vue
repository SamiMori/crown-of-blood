<script setup lang="ts">
import { ref } from 'vue';

const status = ref([
  { title: "Vida", inicio: 16, proximo: 12 },
  { title: "Defesa", inicio: 1, proximo: 1 },
  { title: "Ataque", inicio: 2, proximo: 1 },
  { title: "Poder", inicio: 2, proximo: 1 },
  { title: "Sanidade", inicio: 4, proximo: 3 }
])

</script>

<template>
  <div class="flex gap-16">
    <!-- Descrição -->
    <div class="flex-initial w-full flex flex-col gap-2 relative">
      <h2 class="text-lg font-bold">Amaterasu</h2>
      <p>Todos aqueles estão sobre a luz de Amaterasu a encarnação do sol são abençoados com enorme resistência e
        constituição, sendo exímios guerreiros e combatentes. Sua <strong>Cartas</strong> e <strong>Talentos</strong> são
        voltas para cura pessoal,
        resistência a dano e por fim dano massivo em um único alvos.</p>
      <p>Os herdeiros desa linhagem possuem muita vida, armadura e defesa, sendo os melhores pontos para as linhas de
        frente de um combate, mas além disso também é muito versátil em seus talentos, podendo causar muito dano ou dar
        grande apoio aos outros herdeiros.</p>
      <br>
      <h2 class="text-lg font-bold">Caminho de Sangue</h2>
      <p>Assim que o herdeiro segue o caminho de amaterasu ele recebe 1 ponto forçado para adicionar em qualquer atributo
        de combatem além disso também deve escolher uma "arma" a distancia ou corpo a corpo, essa escolha pode ter
        alterada toda vez que entrar no purgatório. A aparencia da arma é livre para cada herdeiro.</p>
      <p><strong>Arma a distancia</strong> causan dano equivalentes a 1D8 e possuem alcance de corpo-a-corpo até 16m.</p>
      <p><strong>Arma corpo a corpo</strong> causan dano equivalentes a 2D6 e possuem alcance somente de corpo-a-corpo.
      </p>
      <br>
      <h3 class="border-b font-bold">Especialização</h3>
      <p>No nível 1, o herdeiro pode usa suas novas capacidades pra melhor o uso dos seus poderes, podendo escolher um
        desses benefícios seguir:</p>
      <p>A carta <strong>Corpo de Aço</strong> pode ser usado sem custo nenhum uma quantidade de vezes igual ao seu nível,
        além disso ela não conta para a quantidade maxima do seu deck.</p>
      <p>A carta <strong>Ataque Aprimorado</strong> pode ser usado sem custo nenhum uma quantidade de vezes igual ao seu
        nível, além disso ela não conta para a quantidade maxima do seu deck.</p>

      <br>
      <h3 class="border-b font-bold">Instinto de Guerreiro</h3>
      <p>No nível 2, ao realizar um ataque o herdeiro de Amaterasu pode fazer mais um ataque como parte da ação.</p>

      <br>
      <h3 class="border-b font-bold">Aprimoramento do Sol</h3>
      <p>No nível 3, Escolhe um Atributo do personagem para ganhar +1, com esse ponto melhorado o herdeiro pode se
        utilizar da conversão de atributos para fazer um aprimoramento forçado. </p>

      <br>
      <h3 class="border-b font-bold">Indomável</h3>
      <p>No nível 4, o herdeiro após tantos combates no purgatório acaba por desenvolver estratégias unicas que interagem
        com seus ataques, escolha um desses benefícios:</p>
      <p><strong>Batedor</strong>, para melhor sua capacidade de causar dano, após tantas batalhas o herdeiro já é capaz
        de ver atrás da defesa inimiga, o herdeiro escolhe um alvo inimigo, toda vez que o herdeiro causar dano a esse
        inimigo ele adiciona 1D6 a mais de dano, ele dano sobe no nivel 6 para 2D6. O alvo fica marcado até que morra ou
        que o heridero fique desacordado, o herdeiro só pode usar essa estrategia um número de vezes igual ao seu
        nivel.</p>
      <p><strong>Linha de Frente</strong>, defender e persistir depois de tantas lutas, tantos ataques fatais e dores, seu
        caminho se moldou para prosperar diante a tudo. Agora uma o herdeiro já é muito mais habilidoso com sua arma,
        quando um inimigo fizer um ataque contra você, o herdeiro pode desviar parcialmente o ataque com sua arma tomando
        somente metade do dano, a outra medade do dano é redirecionado para um alvo até 3m de distancia. O herdeiro só
        pode usar essa estratégia uma vez por turno.</p>
    </div>
    <!-- Status -->
    <div class="flex-none w-[260px] relative">
      <div class="absolute  h-full top-0">
        <div class="sticky top-[30px] flex flex-col gap-2 text-sm">
          <h3 class="text-base font-bold">Status de Herança</h3>
          <p>Estatistificas de atributos melhoradas de um herdeiro de Amaterasu e sua evolução</p>
          <br>
          <div>
            <h4 class="text-base border-b font-bold">Armadura</h4>
            <div class="flex justify-between">
              <p>Inicial:</p>
              <p>15 + Defesa</p>
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
            <div>Qualquer elementos que cause dano a um alvo o herdeiro pode adicionar sua “Capacidade Física” a soma do
              valor.</div>
          </div>
          <div class="ml-10">
            <br>
            <p class="italic text-end">“ Um guerreiro não se esconde através de desculpas ”</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
