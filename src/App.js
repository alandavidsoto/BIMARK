import 'react-loading-skeleton/dist/skeleton.css'
import './App.scss'
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch,Route, HashRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';
const IndexHome = React.lazy(() => import('./componentes/home/IndexHome'));
const IndexProductos = React.lazy(() => import('./componentes/productos/IndexProductos'));
const IndexCarrito = React.lazy(() => import('./componentes/carrito/IndexCarrito'));
const IndexNosotros = React.lazy(() => import('./componentes/nosotros/IndexNosotros'));
const Layout = React.lazy(() => import('./componentes/layout/Layout'));
const IndexOfertas = React.lazy(() => import('./componentes/ofertas/IndexOfertas'));
const IndexProducto = React.lazy(() => import('./componentes/producto/IndexProducto'));

function App() {
  const state = useSelector((state)=> state.reducer_product)
  
  useEffect(()=>{
    sessionStorage.setItem("product",JSON.stringify(state.product))
    sessionStorage.setItem("ids",JSON.stringify(state.ids))
  },[state])
  return (
    <HashRouter 
    >
      <Suspense fallback={<div></div>}>
        <Layout>
            <Switch >

                <Route path='/productos/:id' component={IndexProducto}/>
                <Route path='/nosotros' component={IndexNosotros}/>
                <Route path='/ofertas' component={IndexOfertas}/>
                <Route path='/carrito' component={IndexCarrito}/>
                <Route path='/productos' component={IndexProductos}/>
                <Route path='/' component={IndexHome}/>
            </Switch>
        </Layout>
      </Suspense>
              
    </HashRouter>
    
  );
}

export default App;
