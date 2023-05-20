<script setup lang="ts">

</script>

<template>
  <article class="flex justify-center">
    <div class="max-w-[1000px]  flex flex-col gap-4">
      <h2 class="text-lg font-bold">Mecânicas</h2>

      <p>Como um jogo de interpretação, Coroa de Sangue funciona principalmente através
        das descrições do mestre e dos jogadores, normalmente ações simples não precisam
        de testes, mas ações mais complexas exigem isso, os testes funcionam baseado na
        descrição do jogar sobre a ação e o mestre solicita qual tipo de teste o jogador
        deve realizar.</p>

      <p>Os testes são feitos através de rolagens de dados baseados no atributos base do
        personagem ou no atributo de combate. Atributos base usam seu modificador como
        quantidade de dados, enquanto os atributos de combate se utilizam de modificadores
        somativos para definir resultados. Sendo que para todos os teste os dados
        utilizados são D20.</p>

      <h3 class="border-b font-bold mt-6">Atributo Base</h3>

      <p>Os atributos base do personagem são definidos em
        três diferentes capacidades, sendo elas Física Mental
        e Social, podendo variar entre 0 a 5, sendo o valor
        definido a quantidade de dados jogados nos testes,
        todas elas são base para definir os atributos de
        combate do personagem.</p>

      <p><strong>Capacidade Física</strong> se refere as qualidades e
        potencias físicas do seu personagem, podendo variar
        tanto em relação ao nível de força, agilidade,
        resistência ou saúde que seu personagem desempenha.</p>

      <p><strong>Capacidade Mental</strong> se refere ao nível de suas
        capacidade tanto intelectuais quanto logicas,
        também podendo entrar nas característica de seu
        personagem como apreciação por leitura, filmes e
        tudo que gere alguma forma de conhecimento.</p>

      <p><strong>Capacidade Social</strong> se refere a sua adaptabilidade em
        relação as pessoas a sua volta, o quanto sociável e
        amigável seu personagem consegue parecer e o nível
        de confiança que ele pode transmitir para as
        pessoal, ao invés também pode ser o quanto seu
        personagem consegue manipular os outros a sua volta
        ou perceber mentiras.</p>

      <p><strong>Conversão de Atributo Base para Atributo de Combate:</strong></p>
      <div>
        <div class="flex justify-between bg-[#272727] p-2">
          <p>Capacidade Física</p>
          <p>Vida e Defesa</p>
        </div>
        <div class="flex justify-between p-2">
          <p>Capacidade Mental</p>
          <p>Ataque e Poder</p>
        </div>
        <div class="flex justify-between bg-[#272727] p-2">
          <p>Capacidade Social</p>
          <p>Ataque e Sanidade</p>
        </div>
      </div>


      <h3 class="border-b font-bold mt-6">Atributos de Combate</h3>

      <p>Os atributos de combate são definidos em cinco diferentes tipos, sendo eles Vida,
        Defesa, Ataque, Poder e Sanidade. Ao escolher uma “herança” como herdeiro o
        personagem ganha valores iniciais para cada atributo e pode ainda usar seu
        atributo base para forçar um upgrade no atributo de combate semelhante, além
        disso diferente dos atributos base que dão uma quantidade de dados para serem
        rolados, os atributos de combate tem base em modificadores brutos para definir os
        resultados.</p>

      <p><strong>Vida</strong> se refere a quantidade de saúde do seu personagem, sendo o parâmetro para
        definir o quanto de dano seu personagem consegue aquentar até cair.</p>

      <p><strong>Defesa</strong> se refere a resistência natural do seu personagem, ou seja, o quanto de dano
        ele consegue resistir antes de bater diretamente em sua vida, contudo lembre-se
        que a defesa só é valida para danos físicos.</p>

      <p><strong>Ataque</strong> se refere a quantidade de dano e o quão boa é a mira do seu personagem,
        rolagem de ataque e de dano utilizam esse atributo como base.</p>

      <p><strong>Poder</strong> se refere a quantidade de energia que seu personagem consegue usar do
        purgatório, ao usar cartas magicas e alguns ataques mágicos se utilizam de poder
        para ter referencia.</p>

      <p><strong>Sanidade</strong> se refere a quão bem mentalmente está seu personagem, ele defini a
        margem de até onde seu personagem iria até chegar na completa loucura do
        purgatório.</p>

      <h3 class="border-b font-bold mt-6">Vida e Sanidade</h3>

      <p>Os herdeiro sempre acabam correndo algum risco de vida a partir do momento que são coroados, os campos de vida e
        sanidade definem os limites físicos e psicológicos que sue personagem consegue aguentar, caso qualquer um deles
        acabe zerando o personagem pode perder a consciência(Vida) ou entrar em loucura(Sanidade), quando o personagem
        fica louco o mestre ira descrever o cenário lunático em que o personagem se encontrar para o jogador se
        contextualizar sobre seu estado, a partir disso a vida desse personagem vai diminuindo gradativamente até chegar a
        zero, enquanto isso os companheiros de time podem tentar ajudar esse personagem.</p>

      <p>No casode ter chegado a zero de vida os aliados podem tentar curar esse personagem para
        ele se estabilizar e retornar a batalha, se foi a sanidade que zerou então os
        aliados podem fazer testes e tentar conversar com o personagem para que ele tente
        recuperar sua sanidade.</p>

      <h3 class="border-b font-bold mt-6">Combate</h3>
      <p>Para os herdeiros é muito comum entrar em combate contra demônios dentro do purgatório, quando os jogadores
        entrar em um combates ele devem, inicialmente rolar suas iniciativas para definir a ordem dos jogadores, sendo que
        sua <strong>Iniciativa</strong> é equivalente a sua <strong>Capacidade Física</strong>.</p>
      <p>Dentro do combate cada jogador tem seu turno para definir o que deseja fazer, e dentro do turno existe algumas
        coisa que o jogador pode fazer sendo ela ação de movimentação e uma ação padrão.</p>
      <p>Ação de movimento, cada personagem tem 9m de deslocamento para usar no seu turno, deslocamento que não seja para
        correr custa 1.5m a mais, como por exemplo nadar, correr ou carregar alguém.</p>
      <p>Ação padrão, como Coroa de Sangue tem um foco narrativo bem amplo então as ações padrões podem ser definida como
        qualquer coisa em um espaço de 5 segundos, para uma melhor visualização veja os exemplos abaixo:</p>

      <div class="italic font-bold">
        <p>“ Herdeiro: Eu vou pegar minha espada e desferir um golpe na diagonal.</p>
        <p>Mestre: Certo, rola um ataque.</p>
        <p>(A partir disso os dados definem os resultados da ação) ”</p>
        <br>
        <p>“ Herdeiro: Eu quero correr até meu aliado e ficar ao lado dele tentar defendê-lo com meu escudo dos ataques.
        </p>
        <p>Mestre: Okay, o aliado pode contar com metade da sua defesa para sua armadura e resistência caso não se mova do
          lugar até o inicio do seu turno. “</p>
      </div>

      <p>Lembrando que o mestre e os personagens não fazem milagres, sejam plausíveis no que desejam fazer e explicativos
        de como isso ira ocorrer para que o mestre possa ser mais preciso na sua solicitação de teste.</p>


      <h3 class="border-b font-bold mt-6">Purgatório</h3>
      <p>Quando um herdeiro abre as portas para o purgatório ele cria um domínio com suas característica, normalmente
        sendo um local que reflete conforto par ele, sendo assim que abre os portões do purgatório recebem algumas
        vantagens, podendo distribuirá livremente, as habilidade do purgatório tem um intervalo de 1 dia para cada
        herdeiro que o abre.</p>

      <div>
        <div class="grid grid-cols-3 justify-items-center bg-[#272727] p-2">
          <p>Vantagem(1D6)</p>
          <p>Cura de Sanidade(1D6)</p>
          <p>Cura(1D10)</p>
        </div>
        <div class="grid grid-cols-3 justify-items-center  p-2">
          <p>Nível * 2</p>
          <p>Nível</p>
          <p>Nível</p>
        </div>
      </div>
    </div>
  </article>
</template>
