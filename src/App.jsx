import RouteLayout from "./Router/RouteLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Shop from "./Pages/Shop";
import ProductPageDetail from "./Pages/ProductPageDetail";
import Cart from "./Pages/Cart";



function App() {
  const router = createBrowserRouter(
       createRoutesFromElements(
          <Route>
            <Route path='/' element={<RouteLayout />}>
              <Route path='/' element={<Home />}/>
              <Route path='/checkout' element={<Checkout />}/>
              <Route path='/shoplist' element={<Shop />}/>
              <Route path='/productdetail' element={<ProductPageDetail />}/>
              <Route path='/addcart' element={<Cart />}/>
            
            </Route>
         </Route>
    )
  );

return (
  <>

  <RouterProvider router={router} />
    
  </>
  )
}

export default App


