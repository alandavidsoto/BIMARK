
export const buy_product_action = (producto,cant = 1) =>{
  return {
    type : 'buy_product',
    payload: {producto,cant}
  }
}

export const pay_product_action = () =>{
  return {
    type : 'pay_product',
    payload: []
  }
}

export const remove_product_action = (id) =>{
  return {
    type : 'remove_product',
    payload: id
  }
}

export const increment_product_action = (id,cant = 1) =>{
  return {
    type : 'increment_product',
    payload: {id,cant}
  }
}

export const decrement_product_action = (id) =>{
  return {
    type : 'decrement_product',
    payload: id
  }
}



/* export const fetching = (valor) => {
  return async (dispatch) => {
    const newValor = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`)
    const newnewValor = await newValor.json()
    dispatch({
      type: fetch_return,
      payload: newnewValor
    })
  }
} */