import style from "../../pages/livro/livro.module.css";

export default function Livro() {
    return (
        <>
            <main className={style.container}>
                <section className={style.header}>
                    {/* DOTS: 3 bolinhas vermelhas definidas como 'span' para serem inseridas acima dos textos */}
                    <div className={style.dots}>
                        <span className={style.dot}></span>
                        <span className={style.dot}></span>
                        <span className={style.dot}></span>
                    </div>

                    <h2 className={style.subtitle}>Sobre o Livro</h2>
                </section>

                <section className={style.content}>
                    <div className={style.text}>
                         <p>
                            Crepúsculo poderia ser uma história comum, não fosse um elemento irresistível: o objeto da paixão da
                            protagonista é um vampiro. Assim, soma-se à paixão um perigo sobrenatural temperado com muito suspense,
                            e o resultado é uma leitura de tirar o fôlego. Um romance repleto das angústias e incertezas da
                            juventude - o arrebatamento, a atração, a ansiedade que antecede cada palavra, cada gesto, e todos os medos.
                        </p>

                        <p>
                            Isabella Swan chega à nublada e chuvosa cidadezinha de Forks - último lugar onde gostaria de viver.
                            Tenta se adaptar à vida provinciana na qual aparentemente todos se conhecem, lidar com sua constrangedora
                            falta de coordenação motora e se habituar a morar com um pai com quem nunca conviveu. 
                            Em seu destino está Edward Cullen.
                        </p>

                        <p>
                            Misterioso, ele é à primeira vista, hostil à presença de Bella - o que provoca nela uma
                            inquietação desconcertante. Ela se apaixona. Ele, no melhor estilo "amor proibido", alerta: Sou um risco para você.
                            Ela é uma garota incomum. Ele é um vampiro. Ela precisa aprender a controlar seu corpo quando ele a toca. Ele,
                            a controlar sua sede pelo sangue dela. Em meio a descobertas e sobressaltos, Edward é, sim, perigoso: um perigo
                            que qualquer mulher escolheria correr.
                        </p>

                        <p>
                            Nesse universo fantasioso, os personagens construídos por Stephenie Meyer - humanos ou não - se mostram de tal forma
                            familiares em seus dilemas e em seu comportamento que o sobrenatural parece real. Meyer torna perfeitamente plausível
                            - e irresistível - a paixão de uma garota de 17 anos por um vampiro encantador.
                        </p>

                        <p>
                            Com direitos vendidos para mais de 40 países e para o cinema, Crepúsculo chegou às telas em 2008, em filme assinado
                            pelos produtores de O Diabo Veste Prada, protagonizado por Robert Pattinson e Kristen Stewart e dirigido por Catherine Hardwicke.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
