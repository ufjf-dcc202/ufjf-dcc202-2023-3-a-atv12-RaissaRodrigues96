import { getEstoque, transacaoNoEstoque, limpaEstoque } from "./estoque";

const olJoao = document.querySelector("#Joao");
const olMaria = document.querySelector("#Maria");

document.entrada.addEventListener('submit', leFormulario);

document.addEventListener('DOMContentLoaded'){
    document.getElementById('buttonLimpaLista').addEventListener('click') {
        limpaEstoque();
        atualizaTela();
    }
}

atualizaTela();

function leFormulario(event){
    event.preventDefault(event);
    const quantidade = document.entrada.quantidade.valueAsNumber;
    const fruta = document.entrada.fruta.value;
    const origem = document.entrada.origem.value;
    const destino = document.entrada.destino.value;

    console.log(`${origem} doa ${quantidade} ${fruta} para ${destino}`);

    transacaoNoEstoque(origem, destino, fruta, quantidade);

    atualizaTela();
}