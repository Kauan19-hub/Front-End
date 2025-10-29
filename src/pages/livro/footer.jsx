import react_logo from '../assets/images/react_logo.jpg';
import style from '../livro/footer.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.container}>
              <div className={style.column}>
                  <h3>Programas</h3>
                  <p>Cooperativo</p>
                  <p>Um por um</p>
              </div>

              <div className={style.column}>
                  <h3>Serviços</h3>
                  <p>Trabalhos</p>
                  <p>Autor</p>
                  <p>Consultas</p>
              </div>

              <div className={style.column}>
                  <h3>Contato</h3>
                  <p>Home</p>
                  <p>Sobre</p>
                  <p>Contato</p>
              </div>

              <div className={style.logoContainer}>
                <img src={react_logo} alt="Logo React" className={style.logo}/>
              </div>
          </div>

          <hr className={style.line}/>
          <p className={style.copyright}>
            &copy; Aplicação Crepúsculo 2025. Todos os direitos reservados.
          </p>
       </footer>
    );
}