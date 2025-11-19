const galeria = document.getElementById('galeria-personagens');

// Função assíncrona para buscar personagens da API
async function carregarPersonagens() {
    try {
        galeria.innerHTML = "<p>Carregando personagens...</p>";

        const resposta = await fetch("https://rickandmortyapi.com/api/character");
        const dados = await resposta.json();

        criarGaleria(dados.results);

    } catch (erro) {
        galeria.innerHTML = "<p>Erro ao carregar os personagens 😢</p>";
        console.error("Erro:", erro);
    }
}

// Criar os cartões com os dados recebidos da API
function criarGaleria(lista) {
    galeria.innerHTML = ""; 
    
    for (const personagem of lista) {
        // Converte status em classe de cor
        const classeTag =
            personagem.status === "Alive" ? "tag-heroi" :
            personagem.status === "Dead" ? "tag-vilao" :
            "tag-neutro";

        const cartaoHTML = `
            <div class="cartao">
                <img src="${personagem.image}" alt="Imagem de ${personagem.name}">
                <div class="info">
                    <h3>${personagem.name}</h3>

                    <span class="tag ${classeTag}">${personagem.status}</span>

                    <p>Espécie: ${personagem.species}</p>
                    <p>Origem: ${personagem.origin.name}</p>
                </div>
            </div>
        `;
        galeria.innerHTML += cartaoHTML;
    }
}

carregarPersonagens();
