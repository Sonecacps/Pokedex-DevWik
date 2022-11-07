/*Busca algo no html*/
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
    /*foreach consegue inserir o evento de click na lista toda
     =>(arrow function = função de seta) função (algo que executa uma função)
     Para escrever uma funcão ('Ação', () => {})*/
listaSelecaoPokemons.forEach(pokemon => {
    //Trabalha eventos feito pelo usuário na listagem de pokemons
    pokemon.addEventListener('click', () => {
        // console.log(pokemon)
        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Trocar o pokemon
        const idPokemonSelecionado = pokemon.attributes.id.value

        //  console.log(document.getElementById('cartao-bulbasaur'))
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo no pokemon
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo noo item da lista
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})