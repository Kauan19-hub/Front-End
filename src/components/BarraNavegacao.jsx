import style from '../styles/Navegacao.module.css'
import { Link } from 'react-router-dom'

export function BarraNavegacao() {
  return (
    <nav className={style.navbars}>
      <ul>
        <li><Link to="/Conteudo">Sobre a Autora</Link></li>
        <li><Link to="/Livro">Sobre o Livro</Link></li>
        <li><Link to="/Curiosidade">Curiosidades</Link></li>
      </ul>
    </nav>

  )
}
