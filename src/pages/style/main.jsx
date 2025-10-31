import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import do CreateRoot necessário para rotas também, e para renderização do React
import App from '../../App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
