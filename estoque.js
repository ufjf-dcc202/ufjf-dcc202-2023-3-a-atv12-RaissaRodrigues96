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

    if (itemEncontrado){
        itemEncontrado.quantidade += quantidade;
    }else {
        estoque[destino].push({tipo,quantidade});
    }
    return;
  }

  else {
    let itemOrigem = estoque[origem].find(item => item.tipo === tipo);
    let itemDestino = estoque[destino].find(item => item.tipo === tipo);

    if(!itemOrigem){
        return;
    }
  }

  else if(itemOrigem.quantidade < quantidade){
    if(itemDestino){
        itemDestino.quantidade += itemOrigem.quantidade;
    }else {
        estoque[destino].push({ tipo: tipo, quantidade: itemOrigem.quantidade });
    }
    itemOrigem.quantidade = 0;
  }

  else {
    if(itemDestino){
        itemDestino.quantidade += quantidade;
    }else{
        estoque[destino].push({ tipo, quantidade });
    }
    itemOrigem.quantidade = itemOrigem.quantidade - quantidade;
  }
return;

export { getEstoque, transacaoNoEstoque, limpaEstoque };
  
  //export {getEstoque}