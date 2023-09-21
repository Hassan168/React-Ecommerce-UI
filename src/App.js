import { Navbar,Footer } from "./components";
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails'
import {BrowserRouter as Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
        
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Product-details" element={<ProductDetails/>}></Route>
          </Routes>
       
      <Footer/>

      
    </div>
  );
}

export default App;
