import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import ReviewItem from './components/ReviewItem/ReviewItem';
import cartProductsLoader from './Loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home> ,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: cartProductsLoader
      },
    
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },{
        path: '/checkout',
        element: <Checkout></Checkout>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>,
)
// ()=>fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')