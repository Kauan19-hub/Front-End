// import { Inicial } from './Paginas/Inicial';
// import './App.css';
// import { BarraNavegacao } from './Componentes/BarraNavegacao';

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