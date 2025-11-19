// 1. Array de Objetos (Lista de Personagens)
const personagens = [
    {
        nome: "Capitão Código",
        tipo: "Herói",
        poder: "Manipulação de Strings",
        imagem: "https://via.placeholder.com/300x200/007bff/ffffff?text=Capitao+Codigo"
    },
    {
        nome: "Dona CSS",
        tipo: "Herói",
        poder: "Controle do Box Model",
        imagem: "https://via.placeholder.com/300x200/28a745/ffffff?text=Dona+CSS"
    },
    {
        nome: "Dr. Bug",
        tipo: "Vilão",
        poder: "Criação de Erros",
        imagem: "https://via.placeholder.com/300x200/dc3545/ffffff?text=Dr.+Bug"
    },
    {
        nome: "Loop Infinito",
        tipo: "Vilão",
        poder: "Congelamento de Páginas",
        imagem: "https://via.placeholder.com/300x200/ffc107/333333?text=Loop+Infinito"
    }
]

const galeria = document.getElementById('galeria-personagens')

// Função para criar e mostrar os cartões
function criarGaleria() {
    // 2. Loop (for...of) para percorrer a lista de personagens
    for (const personagem of personagens) {
        // 3. Define a classe CSS baseada no tipo (Herói ou Vilão)
        const classeTag = personagem.tipo === "Herói" ? "tag-heroi" : "tag-vilao"

        // 4. Cria o HTML do cartão, acessando as propriedades do Objeto
        const cartaoHTML = `
            <div class="cartao">
                <img src="${personagem.imagem}" alt="Imagem de ${personagem.nome}">
                <div class="info">
                    <h3>${personagem.nome}</h3>
                    <span class="tag ${classeTag}">${personagem.tipo}</span>
                    <p>Poder Principal: ${personagem.poder}</p>
                </div>
            </div>
        `
        // 5. Adiciona o cartão ao container principal (DOM)
        galeria.innerHTML += cartaoHTML
    }
}

// Inicia a criação da galeria
criarGaleria()
