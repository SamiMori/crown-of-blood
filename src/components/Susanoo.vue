<script setup lang="ts">
import { ref } from "vue";

const status = ref([
  { title: "Vida", inicio: 12, proximo: 10 },
  { title: "Defesa", inicio: 0, proximo: 1 },
  { title: "Ataque", inicio: 2, proximo: 2 },
  { title: "Poder", inicio: 2, proximo: 2 },
  { title: "Sanidade", inicio: 6, proximo: 6 },
]);
</script>

<template>
  <div class="flex gap-16">
    <!-- Descrição -->
    <div class="flex-initial w-full flex flex-col gap-2 relative">
      <h2 class="text-lg font-bold">Susanoo</h2>
      <p>
        Todos aqueles estão sobre a tempestade de Susanoo a encarnação das
        tormentas são abençoados com a mesma habilidade de causar o caos e a
        calmaria, sendo exímios lideres e combatentes. Sua
        <strong>Cartas</strong> e <strong>Talentos</strong> são voltas para
        buffers, debuffs, cura e aplicação de efeitos.
      </p>
      <p>
        Os herdeiros desa linhagem possuem muita sanidade, poder e ataque sendo
        ótimas opção para ficar tanto na linha de frente quando na vanguarda,
        mas além disso também é muito versátil em seus talentos, podendo causar
        muito dano ou dar grande apoio aos outros herdeiros.
      </p>
      <br />
      <h2 class="text-lg font-bold">Caminho de Sangue</h2>
      <p>
        Assim que o herdeiro segue o caminho de Susanoo, ele percebe que seu
        poder tem uma liberação constante
        <strong
          >podendo materializar seu poder em forma de objeto ou uma criatura de
          tamanho pequeno chamado de gema de tempestade</strong
        >, gema compartilha seu turno com o herdeiro, podendo o mesmo usar uma
        ação livre para mover a gema até 6m de distancia e comandar seus
        ataques. Os ataques da gema não contam para sua ação de principal, o
        herdeiro pode usar também sua liberação constante de energia para dar
        dano no ao inimigo.
      </p>
      <p>
        <strong>Liberação</strong> causa dano igual a 1D8 além de acertar mais
        dois alvos a sua escolha que iram tomar 1D4 de dano dentro do alcance de
        1m, esse dano não pode ser mudado nem adicionado o modificador, o
        alcance da liberação é de corpo-a-corpo a 9m.
      </p>
      <p>
        <strong>Gema da tempestade</strong> causa dano igual a 1D8 e tem alcance
        de corpo-a-corpo até 3m.
      </p>
      <p>
        Ela também possues status de vida igual a 10 + (5 * nivel do herdeiro) e
        compartilha seu valores de armadura, ataque e defesa. Se a vida da gema
        for zerada, os proximos dano que ela receber iram passar diretamente
        para o herdeiro, em caso que o herdeiro e a gema sofrem dano junto da
        mesma fonte, o herdeiro sofre somente o próprio dano.
      </p>
      <br />
      <h3 class="border-b font-bold">Especialização</h3>
      <p>
        No nível 1, o herdeiro escolhe como será seu relacionamento com sua gema
        da tempestade ganhando uma das seguintes características:
      </p>
      <p>
        <strong>Domador</strong>: ao escolher ser um domador, o herdeiro vira um
        único ser com sua gema fazendo com que ela perca a capacidade de
        deslocamento sem o herdeiro, a partir de agora a gema sempre estará ao
        seu lado em todos os momentos, a vida da gema agora é considerada como
        vida temporária do herdeiro e ela não pode mais ser atacada, a gema não
        ataca mais sozinha agora o ataque dela é coordenada com o herdeiro, toda
        vez que realizar o ataque de <strong>“Liberação”</strong> a gema
        adicionar mais 1D8 na rolagem de dado e seu modificador de Dano é
        dobrado.
      </p>
      <p>
        <strong>Comandante</strong>: ao escolher se um comandante, o herdeiro se
        transforma em um general de guerra perante sua gema podendo usá-la
        estrategicamente em campo, agora o herdeiro pode usar suas cartas
        através da gema tendo assim um melhor controle do campo além disso suas
        cartas que teriam somente você como alvo único também afetam a gema. A
        gema da tempestade pode ter uma carta em concentração.
      </p>
      <br />
      <h3 class="border-b font-bold">Caos da Tormenta</h3>
      <p>
        No nível 2, o herdeiro já está mais acostumado com sua energia caótica,
        podendo agora encontrar calmaria ao seu redor. O herdeiro pode usar sua
        <strong>Sanidade</strong> como fonte de poder, podendo consumi-la ao
        invés dos seus pontos de poder ao usar uma carta, além disso agora sua
        defesa conta para os danos de sanidade.
      </p>
      <br />
      <h3 class="border-b font-bold">Aprimoramento da Tempestade</h3>
      <p>
        No nível 3, Escolhe um Atributo do personagem para ganhar +1, com esse
        ponto melhorado o herdeiro pode se utilizar da conversão de atributos
        para fazer um aprimoramento forçado.
      </p>
    </div>
    <!-- Status -->
    <div class="flex-none w-[260px] relative">
      <div class="absolute h-full top-0">
        <div class="sticky top-[30px] flex flex-col gap-2 text-sm">
          <h3 class="text-base font-bold">Status de Herança</h3>
          <p>
            Estatistificas de atributos melhoradas de um herdeiro de Susanoo e
            sua evolução
          </p>
          <br />
          <div>
            <h4 class="text-base border-b font-bold">Armadura</h4>
            <div class="flex justify-between">
              <p>Inicial:</p>
              <p>14 + Defesa</p>
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
            <div>
              Qualquer elementos que cause dano a um alvo o herdeiro pode
              adicionar sua “Capacidade Social” a soma do valor.
            </div>
          </div>
          <div class="ml-10">
            <br />
            <p class="italic text-end">“”</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
