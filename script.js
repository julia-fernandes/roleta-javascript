//lista vazia para receber as opções digitadas pelo usuário
const opcoes = [];

//captura dos elementos html
const entrada = document.getElementById("entrada");
const botaoAdd = document.getElementById("botao-add");
const botaoGirar = document.getElementById("botao-girar");
const sorteado = document.getElementById("resultado");
const listagem = document.getElementById("listagem");
const itemLista = document.createElement("li");

//funcionalidades do botão de adicionar
botaoAdd.addEventListener("click", function(){
    //quando o botão for clicado, o texto inserido no input será armazenado no array
    opcoes.push(entrada.value);

    const item = document.createElement("li"); //cria um item para a lista

    item.textContent = entrada.value; //adiciona ao item da lista o dado inserido
    listagem.appendChild(item); //adiciona esse item a lista
});

//funcionalidades do botão de girar
botaoGirar.addEventListener("click", function() {

    //guarda no indice apenas o inteiro do número decimal resultante do cálculo
    const indice = Math.floor(Math.random() * opcoes.length);
    const resultado = opcoes[indice];
    //guarda como resultado do sorteio o elemento do array referente ao indice, ao inteiro armazenado

    sorteado.textContent = resultado;
});

/*sobre o cáculo:
  1° obtemos a quantidade de opções de escolha que serão sorteadas através de um array, 
  2° chamamos a função de gerar um número aleatório entre 0 e 1 (math.random), 
  3° como o número gerado é menor que a numeração do índice, multiplicamos esse aleatório 
  pela quantidade de elementos presentes no array para que seja proporcional ao n° de opções 
  4° extraímos dele somente a parte inteira com outra função que faz isso (math.floor)
  5° para fechar atribuímos esse inteiro ao elemento cujo índice seja correspondente
 */