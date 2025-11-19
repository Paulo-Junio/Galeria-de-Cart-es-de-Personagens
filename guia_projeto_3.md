# Guia de Execução: Projeto 3 - Galeria de Cartões de Personagens

## 🦸 Objetivo do Projeto

Criar uma galeria de cartões usando **Grid** para o layout e **Array de Objetos** no JavaScript para armazenar as informações dos personagens.

### Conteúdos Revisados

| Conteúdo | Onde é Usado |
| :--- | :--- |
| **HTML** | Estrutura básica, tags de imagem e texto. |
| **CSS** | Estilização de cartões, uso de classes para cores. |
| **Grid** | Organização da galeria de cartões. |
| **JavaScript** | Funções, `for...of` (Loop). |
| **Objetos** | Estrutura de dados de cada personagem (nome, tipo, poder). |
| **Arrays** | Lista de todos os personagens. |
| **DOM** | Inserir os cartões gerados no HTML. |
| **Condições** | Usar o Operador Ternário (`? :`) para definir a classe CSS do cartão. |

## 🛠️ Passos para a Execução

### 1. Estrutura HTML (`index.html`)

O HTML é muito simples, contendo apenas o cabeçalho e a `div` vazia (`id="galeria-personagens"`) que será preenchida pelo JavaScript.

### 2. Estilização CSS (`style.css`)

O CSS é focado em:
-   Estilizar o cartão (`.cartao`) com sombra e transição.
-   Usar `display: grid` com `repeat(auto-fit, minmax(...))` para que a galeria seja **responsiva** e se ajuste automaticamente ao tamanho da tela.
-   Definir classes de cor (`.tag-heroi`, `.tag-vilao`) que serão aplicadas dinamicamente.

### 3. A Magia do JavaScript (`script.js`)

O código JavaScript é o ponto central:

#### A. O Array de Objetos (`personagens`):

-   Criamos uma **Lista (Array)** chamada `personagens`.
-   Dentro dessa lista, cada personagem é um **Objeto** com propriedades como `nome`, `tipo`, `poder` e `imagem`.

#### B. O Loop e a Condição:

-   Usamos o **Loop `for...of`** para percorrer a lista `personagens`.
-   Dentro do loop, usamos uma **Condição Ternária** (`personagem.tipo === "Herói" ? "tag-heroi" : "tag-vilao"`) para decidir qual classe CSS de cor será aplicada à tag do personagem.

#### C. Inserção no DOM:

-   Para cada personagem, criamos uma string HTML completa (`cartaoHTML`).
-   Usamos o **DOM** (`galeria.innerHTML += ...`) para injetar o HTML gerado dentro da `div` da galeria.

## 💡 Dica de Desafio

Tente adicionar um botão de filtro no cabeçalho. Ao clicar, o JavaScript deve usar um **Loop** para percorrer o Array e mostrar **apenas** os personagens do tipo "Herói" ou "Vilão". (Isso exigirá um `addEventListener` e uma Condição `if` dentro do loop).
