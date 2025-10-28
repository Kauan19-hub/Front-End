import style from '../styles/navegacao.module.css';
import { Link } from 'react-router-dom';

export function navegacao() {
  return (
    <nav className={style.navbars}>
      <ul>
        <li><Link to="/conteudo">Sobre a Autora</Link></li>
        <li><Link to="/livro">Sobre o Livro</Link></li>
        <li><Link to="/curiosidade">Curiosidades</Link></li>
      </ul>
    </nav>

  )
}