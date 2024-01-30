# Why React re-renders? Understanding (more about) props and memo

Existem alguns mal-entendidos (_misconceptions_) a respeito de por que o React... reage. É uma característica fundamental que confesso que passei anos achando que compreendia por esse conceito não ser crucial no dia a dia.

É curioso, entretanto, imaginar que um dev com anos de experiência em front-end, especificamente dentro do ecossistema do React, não sabia responder de bate-pronto quais são os eventos que ativam as re-renderizações do React e o que acontece depois que a re-renderização é disparada. Esse dev era eu — e foi por isso que criei esta talk. Se você tem a mesma dúvida que eu tinha, vou tentar te ajudar. É bem simples.

Se para pelo menos uma pessoa presente esse conhecimento repassado não for óbvio, a talk já terá cumprido seu objetivo.

## Verdade 1:

- Toda re-renderização é disparada por uma mudança de estado.



> Ué, mas a re-renderização não acontece quando uma prop muda?

## Verdade 2:

- Quando um componente re-renderiza, ele necessariamente re-renderiza **todos** os seus descendentes. Não apenas filhos e netos, **toda** a árvore abaixo dele.

- Então, se toda re-renderização é disparada por uma mudança, **todo componente que possui uma variável de estado definida** se torna um "topo de árvore" de re-renderizações.

## Mal-entendido 1: o app inteiro re-renderiza sempre que ocorre uma mudança de estado

- Toda re-renderização é disparada por uma mudança de estado. O entendimento completo sobre o *life cycle* do React decorre deste axioma

- Uma dúvida relacionada a disso é: mas quando _props_ mudam, o React também dispara uma re-renderização. Certo?

- Existem duas respostas:
1. uma _prop_ re-renderizada, esteja onde estiver, re-renderiza o componente no qual ela nasce

2. um componente re-renderizado, automaticamente re-renderiza todos os seus descendentes, até o final da árvore
- Como o papel do React é… **reagir** a mudanças de estado, ele utiliza essa estratégia de **top-down** absoluto de re-renderização para manter o virtual-DOM sempre sincronizado na tela. Veremos adiante que o próprio React oferece uma ferramenta para interromper essa cadeia em qualquer ponto da árvore



## Mal-entendido 2: um componente é re-renderizado porque uma prop que ele recebe mudou

- Se um estado pertencente a um componente é passado como prop e é atualizado em um dos filhos desse componente, esse componente-pai irá re-renderizar, disparando o *re-render* em todos os seus descendentes, independente de onde estiver a prop que foi atualizada.
- Então — para reforçar — um componente não re-renderiza porque alguma das props que ele recebe foi alterada, e sim por ser filho de um componente que possui um estado que mudou. **Componentes não re-renderizam por causa das props**.

É possível, no entanto, criar exceções para esse comportamento padrão.



## Demarcando componentes puros

Antes de avisar ao React que um componente x é puro, primeiro é necessário entender o que é uma função pura, dado que componentes são funções.

O conceito de **função pura** é emprestado da programação funcional e significa que uma função sempre deve retornar valores iguais para parâmetros iguais, caso contrário há algum *side effect* atuando sobre ela. Traduzindo para o front-end, um componente puro é aquele cuja UI se comporta da mesma maneira sempre receber props iguais.

Ou seja, um componente cuja UI não precisa ser re-renderizada por estados passados para ele (via props) **pode ser demarcado como um componente puro**. Fazemos isso por meio da memoização.



## Memoização

A memoização torna o componente capaz de ignorar requests não endereçados a ele — visto que um componente é re-renderizado apenas quando um estado pertencente a ele é atualizado ou quando ele é descendente de algum componente que disparou um re-render. A memoização é feita através da função _React.memo()_.

Como foi dito anteriormente, o comportamento padrão é esse porque a tarefa principal do React é manter a UI atualizada com base nas mudanças de estado dos componentes. 

Obs.: como cada componente que possui um estado definido é uma nova instância de re-renderizações na árvore, o `memo()` não impede que o componente em si dispare atualizações para seus descendentes (filhos, netos etc.), apenas impede que ele receba atualizações de seus ascendentes (pais, avós etc.)



## quando a memoização é desnecessária

Nós desenvolvedores costumamos acreditar que as re-renderizações são mais custosas do que realmente são. Quando descobrem que o `memo()` impede que componentes sejam re-renderizados, alguns desenvolvedores tendem a superutilizá-lo.



Na prática o que acontece é que **o React prefere pecar pelo excesso** do que porventura deixar um componente desatualizado. O uso do _React.memo()_, então, pode ser descartado em componentes:

- que possuem poucos descendentes;
- que não fazem muitos cálculos antes de renderizar HTML;
- que não recebem muitas props — e, portanto, não precisam checar seus estados antes de renderizar seus dados ou passá-los adiante;
