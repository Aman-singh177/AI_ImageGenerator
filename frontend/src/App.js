import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="px-4 sm:px-8 md:px-17 lg:px-40 min-h-screen bg-gradient-to-b from-teal-100 to-orange-50">
      <Navbar/>
      <Login/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>} />
        <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
