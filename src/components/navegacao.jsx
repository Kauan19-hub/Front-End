import style from '../components/navegacao.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Link: Sua função é ativar a navegação entre as páginas

export function Navegacao() {
  const [aberto, setAberto] = useState(false); // Controle de menu

  return (
    <nav className={style.navbars}>
      <div className={style.respons} onClick={() => setAberto(!aberto)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${style.nav} ${aberto ? style.ativo : ''}`}>
        <li><Link to="/">Sobre a Autora</Link></li>
        <li><Link to="/livro">Sobre o Livro</Link></li>
        <li><Link to="/curiosidade">Curiosidades</Link></li>
      </ul>
    </nav>

  );
}