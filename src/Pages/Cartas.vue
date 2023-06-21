<script setup lang="ts">
import CartaLista from "../components/CartaLista.vue";
</script>

<template>
  <article class="flex justify-center">
    <div class="max-w-[1000px] flex flex-col gap-4">
      <h2 class="text-lg font-bold">Cartas</h2>

      <p>
        Cartas são como encantamentos, podem ser tratadas como magia ou efeitos
        sobrenaturais que os herdeiros tem acesso, as cartas são separadas em
        decks que cada heranças disponibiliza. As Cartas normalmente são
        utilizas em uma ação padrão, contudo existem cartas que podem ser usadas
        a qualquer momento livremente. A quantidade de cartas que podem estar
        preparadas no seu deck é equivalente ao nivel + medate do poder.
      </p>
      <p>
        As cartas possuem as mesmas divisão entre origens das bençãos sendo
        elas: Luz, Sombra, Vida, Morte, Ordem e Caos. Cada Herança tem algumas
        preferencias entre as origens, por exemplo a herança de Amaterasu possui
        decks de maior parte vindo da Luz e da Vida.
      </p>
      <p>
        Em relação ao roleplay, as cartas assume o visual que o herdeiro desejar
        para combinar com o seu tema, ou seja as cartas sempre vem descrita seus
        efeitos mas nunca a forma que ela toma.
      </p>

      <br />
      <p><strong>Nova versão</strong></p>
      <p>
        Cartas agora são consumiveis, cada carta oculpa um tamanho especifico
        fazendo da montagem de deck um momento muito importante e ainda mais
        importante é saber com o que está lidando antes de entrar em um combate
      </p>
      <CartaLista />
    </div>
  </article>
</template>
