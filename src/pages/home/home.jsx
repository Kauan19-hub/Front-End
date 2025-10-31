import style from './home.module.css';
import stephanye_meyer from '../../assets/images/stephanye_meyer.webp'; //  Importe da imagem da autora

export function Home() {
    return (
        <>
        <main className={style.container}>
            <section className={style.header}>
                <div className={style.dots}>
                    <span className={style.dot}></span>
                    <span className={style.dot}></span>
                    <span className={style.dot}></span>
                </div>

                <h2 className={style.subtitle}>Sobre a Autora</h2>
            </section>

            <section className={style.content}>
                <div className={style.text}>
                    <p>
                        Stephenie Meyer é uma escritora norte-americana, autora da saga "Crepúsculo", publicada a partir de 2005, em quatro livros:
                        Crepúsculo, Lua Nova, Eclipse e Amanhecer, que lhe rendeu cinco filmes em Hollywood, que fez grande sucesso entre os jovens.
                    </p>

                    <p>
                        Stephenie Sonnibe Meyer nasceu em Connecticut, Estados Unidos, no dia 24 de dezembro de 1973. É formada em literatura inglesa
                        na Universidade Brigham Young. Crepúsculo foi o seu primeiro romance, e, logo depois da publicação, ganhou o título de "novos autores
                        mais promissores de 2005" pela Publishers Weekly.
                    </p>

                    <p>
                        Com a repercussão da série Crepúsculo, Stephenie Meyer foi classificada na lista da revista Time como a 49.ª entre as 100 pessoas mais
                        influentes em 2008. Em 2010, a Forbes classificou-a como a 59.ª celebridade mais poderosa. Após escrever Crepúsculo, Stephenie ganhou
                        3 prêmios: um do NY Times e dois da Associação das Bibliotecas Americanas.
                    </p>
                </div>

                <div className={style.image}>
                    <img src={stephanye_meyer} alt="Stephanye Meyer" className={style.autoraImg} loading="lazy" /> {/* Imagem da autora inserida */}
                </div>
            </section>
        </main>
        
    </>
    );
}