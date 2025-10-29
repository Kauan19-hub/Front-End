import { Inicial } from './pages/inicial/inicial';
import './App.css';
import { Navegacao } from './components/Navegacao';
import { BrowserRouter } from 'react-router-dom';
import { MinhasRotas } from './routes/Rotas';

function App() {
  return (
    <BrowserRouter>
        <MinhasRotas/>
    </BrowserRouter>

  )
}

export default App