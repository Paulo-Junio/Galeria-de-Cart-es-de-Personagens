# 📘 Guia de Execução

### **Projeto 3 --- Galeria de Cartões de Personagens (Array de Objetos Local)**

------------------------------------------------------------------------

## 🦸 **Objetivo do Projeto**

Criar uma galeria de cartões utilizando **CSS Grid** para o layout e
**JavaScript** para armazenar as informações dos personagens em um
**Array de Objetos local**, gerando e inserindo os cartões dinamicamente
no **DOM**.

------------------------------------------------------------------------

## 📚 **Conteúdos Revisados**

  -----------------------------------------------------------------------
  Conteúdo                   Onde é Usado
  -------------------------- --------------------------------------------
  **HTML**                   Estrutura básica, tags de imagem e texto.

  **CSS**                    Estilização dos cartões, uso de classes e
                             cores.

  **Grid**                   Organização da galeria com `display: grid` e
                             `repeat(auto-fit, minmax(...))`.

  **JavaScript**             Funções, Array de Objetos, loop `for...of`.

  **Objetos**                Estrutura de dados de cada personagem (nome,
                             tipo, poder, imagem).

  **Arrays**                 Lista local contendo todos os personagens.

  **DOM**                    Inserção dos cartões no HTML via
                             `innerHTML`.

  **Condições**              Operador ternário para definir a classe CSS
                             do cartão com base no tipo.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🛠️ **Passos para a Execução**

------------------------------------------------------------------------

### **1. Estrutura HTML (`index_novo.html`)**

O HTML contém:

-   O cabeçalho (`<header>`) com o título do projeto.\
-   A `<main id="galeria-personagens">`, que é o container vazio onde o
    JS irá injetar os cartões.\
-   As importações do CSS (`style_novo.css`) e do JavaScript
    (`script_novo.js`).

------------------------------------------------------------------------

### **2. Estilização CSS (`style_novo.css`)**

O CSS define toda a aparência da galeria:

-   O seletor **`#galeria-personagens`** usa `display: grid` e\
    `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`\
    → Isso garante que a galeria seja **responsiva** e se ajuste ao
    tamanho da tela.

-   A classe **`.cartao`** define o estilo base de cada cartão.

-   As classes de cor:

    -   `.tag-heroi`
    -   `.tag-vilao`
    -   `.tag-neutro`

    São aplicadas dinamicamente pelo JavaScript conforme o tipo do
    personagem.

------------------------------------------------------------------------

### **3. A Magia do JavaScript (`script_novo.js`)**

#### **A. O Array de Objetos**

-   Criamos uma lista chamada **`personagens`**, armazenando todos os
    dados localmente.
-   Cada item é um objeto com:
    -   `nome`
    -   `tipo`
    -   `poder`
    -   `imagem`

#### **B. Loop e Condição**

-   A função **`criarGaleria(lista)`** monta o HTML dos cartões.
-   Utilizamos **`for...of`** para percorrer o array.
-   Dentro do loop, usamos **Operador Ternário** para escolher a cor da
    tag:

``` js
const classeTag = personagem.tipo === "heroi"
  ? "tag-heroi"
  : personagem.tipo === "vilao"
  ? "tag-vilao"
  : "tag-neutro";
```

#### **C. Inserção no DOM**

-   Para cada personagem, montamos um cartão com **template string**.
-   Em seguida, adicionamos ao DOM:

``` js
galeria.innerHTML += cartaoHTML;
```

------------------------------------------------------------------------

## 💡 **Dica de Desafio**

O projeto exibe todos os personagens.\
Tente adicionar um **filtro** para mostrar apenas "Heróis" ou apenas
"Vilões".

### ✔️ Como fazer:

1.  **Adicionar um Botão:**\
    Inclua no `index_novo.html` algo como:

    ``` html
    <button id="btn-herois">Filtrar Heróis</button>
    ```

2.  **Criar um Event Listener:**\
    No `script_novo.js`:

    ``` js
    document.getElementById("btn-herois").addEventListener("click", () => {
        // ...
    });
    ```

3.  **Usar o Método `filter`:**

    ``` js
    const herois = personagens.filter(p => p.tipo === "heroi");
    ```

4.  **Reconstruir a Galeria:**

    ``` js
    criarGaleria(herois);
    ```
