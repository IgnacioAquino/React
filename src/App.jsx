
import "./components/NavBar/navBar.css";
import "./components/Title/title.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar  from "./components/NavBar";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartProvider from "./context/CartContext";






function App() {
    return(
        <> 
            <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer />}></Route>
                <Route path="/categoria/:categoriaId" element={<ItemListContainer />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}></Route>
            </Routes>
            </CartProvider>
            </BrowserRouter>
        </>
        
    );
}

export default App;
