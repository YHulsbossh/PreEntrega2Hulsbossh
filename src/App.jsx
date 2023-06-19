import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import CheckOut from './components/Checkout';
import Thanks from './components/Thanks';


function App() {
  return (
    <div className='container-fluid'> 
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer />}/>
          <Route path='/cart' element= {<Cart />}/>
          <Route path='/checkOut' element= {<CheckOut />}/>
          <Route path='/thanks/:orderId' element= {<Thanks />}/>
          <Route path='/*' element= {<h3>404 NOT FOUND</h3>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}


export default App;
