const opcoes = []; //armazena as opções digitadas pelo usuário
const itens = []; //para gerenciar as opções visíveis em lista

//captura dos elementos html
const entrada = document.getElementById("entrada");
const botaoAdd = document.getElementById("botao-add");
const botaoGirar = document.getElementById("botao-girar");
const sorteado = document.getElementById("resultado");
const listagem = document.getElementById("listagem");
const botaoRemover = document.getElementById("botao-remover");
const caixaDestaque = document.getElementById("caixa-destaque");
const botaoFechar = document.getElementById("botao-fechar");

let indice = -1; //atribui um estado absurdo equivalente há "indice sem alterações, sem sorteio ainda"

function adicionarOpcao() {
  const opcao = entrada.value.trim(); //guarda o texto limpo de espaços externos

  //validação do texto inserido
  if (opcao === "") {
    alert("O campo não pode estar vazio!");
  } else {
    //armazena o texto inserido no array
    opcoes.push(opcao);

    const item = document.createElement("li"); //cria um item para a lista

    item.textContent = opcao; //adiciona ao item da lista o dado inserido
    listagem.appendChild(item); //adiciona esse item a lista

    itens.push(item);

    entrada.value = "";
  }
}

botaoAdd.addEventListener("click", function () {
  adicionarOpcao();
});

//adiciona o texto digitado no input aos arrays quando pressionar Enter
entrada.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarOpcao();
  }
});

botaoGirar.addEventListener("click", function () {
  if (!opcoes.length) {
    alert("Sem opções a serem sortadas!");
  } else {
    //guarda no indice apenas o inteiro do número decimal resultante do cálculo
    indice = Math.floor(Math.random() * opcoes.length);

    const resultado = opcoes[indice];
    //guarda o valor referente ao índice

    sorteado.textContent = resultado;

    caixaDestaque.style.display = "block";
  }
});

botaoRemover.addEventListener("click", function () {
  //antes de remover valida se a lista de opções está vazia e se não houve sorteio

  if (!opcoes.length || indice === -1) {
    alert("Sem opções para remover!");
  } else {
    itens[indice].remove(); //remove da lista visível a opção sorteada

    //remove o sorteado dos arrays
    itens.splice(indice, 1);
    opcoes.splice(indice, 1);

    caixaDestaque.style.display = "none";
  }
});

botaoFechar.addEventListener("click", function () {
  caixaDestaque.style.display = "none";
});

/*sobre o cáculo:
  1° obtemos a quantidade de opções de escolha que serão sorteadas através de um array, 
  2° chamamos a função de gerar um número aleatório entre 0 e 1 (math.random), 
  3° como o número gerado é menor que a numeração do índice, multiplicamos esse aleatório 
  pela quantidade de elementos presentes no array para que seja proporcional ao n° de opções 
  4° extraímos dele somente a parte inteira com outra função que faz isso (math.floor)
  5° para fechar atribuímos esse inteiro ao elemento cujo índice seja correspondente
 */
