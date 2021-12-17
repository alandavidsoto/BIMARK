export const default_product = {
  product: JSON.parse(sessionStorage.getItem("product")) || [],
  ids: JSON.parse(sessionStorage.getItem("ids")) || []
}



export const reducer_product = (state = default_product, action) => {
    // action creator
    const increment = (id,cant = 1) => {
      return state.product.map(element=> {
        if(element.id === id){
          element.cantidad = element.cantidad + cant
        }
        return element
      })
    }
    const decrement = (id,cant = 1) => {
      return state.product.map(element=> {
        if(element.id === id && element.cantidad > 1){
          element.cantidad = element.cantidad - cant
        }
        return element
      })
    }
    
    switch(action.type){
      case 'buy_product':
        return {
          product: [...state.product,{...action.payload.producto,cantidad: action.payload.cant}],
          ids: [...state.ids,action.payload.producto.id]
        }
      case 'remove_product':
        return {
          product: state.product.filter(element => (element.id !== action.payload)),
          ids: state.ids.filter(element => (element !== action.payload))
        }

      case 'increment_product':
        return {
          ...state,
          product: increment(action.payload.id,action.payload.cant)
        }
      
      case 'decrement_product':
        return {
          ...state,
          product: decrement(action.payload)
        }
      case 'pay_product':
        return {
          ...state,
          product: action.payload /* [] */,
          ids: action.payload /* [] */
        }  
      default:
        return state
    }
}


/* export const reducer_fetch = (state = default_fetch, action) => {
    switch(action.type){
      case fetch_return:
        return {
          data: action.payload
        }
      default:
        return state
    }
  } */