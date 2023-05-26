import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className='container-fluid'> 
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
          <Route path='/item/:id' element= {<ItemDetailContainer />}/>
          <Route path='/*' element= {<h3>404 NOT FOUND</h3>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
