import { BrowserRouter } from "react-router-dom";
import { MinhasRotas } from "./routes/Rotas"
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <MinhasRotas />
      </BrowserRouter>
    </StrictMode>

  );
}

export default App;

// BrowserRouter == Provedor de rotas, monitora a URL do navegador e
// usar <Routes/>, <Route/>, <Link/>, <Outlet/>, useNavigate, e useParams.
// Sem o Browser, nada funciona.
