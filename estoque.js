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

    else if(origem === destino){
        return;
    }

    else if(destino === "pomar"){
        let itemEncontrado = estoque[origem].find(item => item.tipo === tipo);

        if(itemEncontrado){
            if(itemEncontrado.quantidade >= quantidade){
                itemEncontrado.quantidade = itemEncontrado.quantidade - quantidade;
            }else{
                itemEncontrado.quantidade = 0;
            }
        }else{
            return;
        }
        return;
    }
  }

  else if(origem === "pomar"){
    const itemEncontrado = estoque[destino].find(item => item.tipo === tipo);
  }


  
  //export {getEstoque}