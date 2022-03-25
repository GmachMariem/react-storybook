import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home"
import Search from './pages/Search';
import NotFound from './pages/NotFound';
const  App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

         <Route path="/search" element={<Search />} />

        <Route element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
