//estoque.js

let estoque = {
    'joao': [{'tipo':"maca", 'qtd': 1}, {'tipo':"pera", 'qtd': 1},],
    'maria': [{'tipo':"maca", 'qtd': 2}, {'tipo':"banana", 'qtd': 4},],
  };
  
function getEstoque(){
    return estoque;
  }

  function limpaEstoque() {
    estoque = {};
    estoque = {
        'joao': [],
        'maria': []
    }
  }

  function transacaoNoEstoque (origem,destino, tipo, quantidade){
    if (quantidade < 0){
        return;
    }
  }
  
  //export {getEstoque}