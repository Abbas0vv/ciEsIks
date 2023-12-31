import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Index/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element = {<HomePage />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
