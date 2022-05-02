import './App.scss';
// import { CreatePost } from './pages/CreatePost';
import Navbar  from './componants/Navbar';  
import {ShopCard}  from './componants/ShopCard';  
import {AllShops} from './pages/AllShops'
import { AddShop } from './pages/AddShop';
// import { AllPosts } from './pages/AllPosts';

import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>   
        <Routes> 
          <Route path="/" element={< Navbar />}> 
            <Route path="/addshop" element={<AddShop />} /> 
            <Route path="/:searchKey" element={<AllShops />} />
            <Route index element={<AllShops />} />
          </Route> 
        </Routes>
      </BrowserRouter> 

    </>
  );
}

export default App;
