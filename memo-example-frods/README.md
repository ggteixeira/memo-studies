# Why React re-renders? Understanding (more about) props and memo

Existem alguns mal-entendidos (_misconceptions_) a respeito de por que o React... reage. É uma característica fundamental que confesso que passei anos achando que compreendia por esse conceito não ser crucial no dia a dia.

É curioso, entretanto, imaginar que um dev com anos de experiência em front-end, especificamente dentro do ecossistema do React, não sabia responder de bate-pronto quais são os eventos que ativam as re-renderizações do React e o que acontece depois que a re-renderização é disparada. Esse dev era eu — e foi por isso que criei esta talk. Se você tem a mesma dúvida que eu tinha, vou tentar te ajudar. É bem simples.

Se para pelo menos uma pessoa presente esse conhecimento repassado não for óbvio, a talk já terá cumprido seu objetivo.

# Verdade 1:

- Toda re-renderização é disparada por uma mudança de estado.

> Ué, mas a re-renderização não acontece quando uma prop muda?

# Verdade 2:

- Quando um componente re-renderiza, ele necessariamente re-renderiza **todos** os seus descendentes. Não apenas filhos e netos, **toda** a árvore abaixo dele.

- Então, se toda re-renderização é disparada por uma mudança, todo componente que possui uma variável de estado definida dentro de si se torna um "topo de árvore" de re-renderizações.

# Mal-entendido 1: o app inteiro re-renderiza sempre que ocorre uma mudança de estado

- Toda re-renderização é disparada por uma mudança de estado. Todo entendimento sobre o life cycle do React é decorrente deste axioma

- A primeira dúvida decorrente disso é: mas quando _props_ mudam o React também dispara uma re-renderização, certo?

- Existem duas respostas:

1. uma _prop_ re-renderizada, esteja onde estiver, re-renderiza o componente no qual ela nasce

2. um componente re-renderizado, automaticamente re-renderiza todos os seus descendentes, até o final da árvore

- Como a função do React é… reagir a mudanças de estado, ele utiliza essa estratégia top-down de re-renderização para manter o virtual-DOM sempre sincronizado na tela

# Mal-entendido 2: um componente é re-renderizado porque uma prop que ele recebe mudou

- Se um estado pertencente a um componente é passado como prop e é atualizado em um dos filhos desse componente, esse componente-pai irá re-renderizar, disparando o re-render em todos os seus descendentes, independente de onde estiver a prop que foi atualizada.
- Então, para reforçar, um componente não re-renderiza porque alguma de suas props foi alterada, e sim por ser filho de um componente que possui algum estado que foi atualizado

É possível, no entanto, criar exceções para esse comportamento padrão.

**Demarcando componentes puros**

Antes de avisar ao React que um componente x é puro, primeiro é necessário entender o que é uma função pura — dado que componentes são funções.

Esse conceito é emprestado da programação funcional e significa que uma função sempre retorna valores iguais para parâmetros iguais. Traduzindo para o front-end, um componente puro é aquele cuja UI se comporta da mesma maneira sempre receber props (parâmetros) iguais.

Ou seja, um componente cuja UI não precisa ser re-renderizada por estados passados para ele (via props) pode ser demarcado como um componente puro. Fazemos isso por meio da memoização. A memoização torna o componente capaz de ignorar certos requests não endereçados diretamente para ele — visto que aprendemos que um componente é re-renderizado apenas quando um estado pertencente a ele é atualizado ou quando ele é descendente de algum componente que disparou um re-render. A memoização é feita através do _React.memo()_.

O comportamento padrão é esse porque, como disse antes, a tarefa principal do React é manter a UI atualizada com base nas mudanças de estado dos componentes. Nós desenvolvedores tendemos a superestimar o quão custosas são re-renderizações; por isso, o React prefere pecar pelo excesso do que porventura deixar um componente desatualizado. O uso do _React.memo()_, então, pode ser descartado em componentes:

- que possuem poucos descendentes;
- que não fazem muitos cálculos antes de renderizar HTML;
- que não recebem muitas props — e, portanto, não precisam checar seus estados antes de renderizar seus dados ou passá-los adiante;
