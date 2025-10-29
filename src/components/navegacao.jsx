import style from '../components/navegacao.module.css';
import { Link } from 'react-router-dom';

export function Navegacao() {
  return (
    <nav className={style.navbars}>
      <ul>
        <li><Link to="#">Sobre a Autora</Link></li>
        <li><Link to="/livro">Sobre o Livro</Link></li>
        <li><Link to="/curiosidade">Curiosidades</Link></li>
      </ul>
    </nav>

  )
}