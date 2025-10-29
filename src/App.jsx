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

// BrowserRouter == Provedor de rotas, monitora a URL do navegador e
// usar <Routes/>, <Route/>, <Link/>, <Outlet/>, useNavigate, e useParams.
// Sem o Browser, nada funciona.