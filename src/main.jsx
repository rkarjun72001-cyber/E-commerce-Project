import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";



import App from './UI/App'
import "./App.css"
import ProductDetails from './UI/productDetails'
import Cart from './UI/cart'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CartContext } from './UI/CartContext'
import Products from './UI/Products'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
     children: [
      {
        index: true,          // 👈 default page
        element: <Products/>
      },
      {
  path: "/products/:category",
  element: <Products />
},
      { path: "productDetails/:id",
       element: <ProductDetails /> },
       { path: "cart", element: <Cart /> },
       
    ]
  },
  
      
  {
    path: "/cartContext",
    element: <CartContext/>
  },
  


])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
        <RouterProvider router={ router }/>
</HashRouter>
    
  </StrictMode>
  
  
)