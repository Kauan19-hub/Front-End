import style from "./footer.module.css";
import react_logo from "../assets/images/react_logo.webp"; // Logo importado
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // ícones importados

export default function Footer() {
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

                <div className={style.column}>
                    <h3>E-mail</h3>
                    <div className={style.email}>
                        <input type='email' placeholder='Endereço de email'/>
                        <button>Enviar</button>
                    </div>
                        <div className={style.icons}> {/* Links das redes sociais acompanhados dos ícones */}
                        <a href="https://www.instagram.com/kauanl01/?igsh=MTA1czhyN3liM3l0NQ%3D%3D#"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/kauan-vin%C3%ADcius?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
                        <a href="https://github.com/Kauan19-hub"><FaGithub /></a>
                    </div>
                </div>

                <div className={style.logoContainer}>
                    <img src={react_logo} alt="Logo React" loading="lazy" className={style.logo} />
                </div>
            </div>

            <hr className={style.line}/>
            <p className={style.copyright}>
                https://loja.intrinseca.com.br/crepusculo/<br/>
                https://www.pensador.com/autor/stephenie_meyer/biografia/<br/>
                https://www.aficionados.com.br/personagens-principais-saga-crepusculo-historias/<br/><br/>
                &copy; Aplicação Crepúsculo 2025. Todos os direitos reservados.
            </p>
        </footer>
    );
}
