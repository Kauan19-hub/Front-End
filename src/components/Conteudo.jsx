import style from '../styles/conteudo.module.css';
import stephanye_meyer from '../images/stephanye_meyer.jpg';

export function conteudo() {
    return (
        <main className={style.container}>
            <section className={style.header}>
                <h2 className={style.subtitle}>Sobre a Autora</h2>
            </section>

            <section className={style.content}>
                <div className={style.text}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quaerat soluta porro vero fugit quibusdam quisquam et, illum quis corrupti repellendus praesentium impedit laboriosam aliquam aut maxime eius exercitationem eaque?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, fugit eligendi dolorem tenetur quaerat nihil hic aut atque quas quibusdam incidunt repellat numquam unde repudiandae reiciendis! Provident alias facere in!
                    </p>
                </div>

                <div className={style.image}>
                    <img src={stephanye_meyer} alt="Stephanye Meyer" className={style.autoraImg}/>
                </div>
            </section>
        </main>
    );
}







//             <h2 className={style.subtitle}>ENREDO</h2>

//             <p>
//                Até seus 17 anos, a tímida Bella morava com sua mãe, Renée, em Phoenix, Arizona. Quando Renée casa novamente
//                e demonstra a vontade de viajar junto ao marido, Bella decide ir morar com seu distante pai na cidade em que nasceu, a
//                pequena Forks, em Washington. As características de cidade pequena e a chuva constante de Forks sempre fizeram com
//                que Bella odiasse a cidade, mas tudo muda quando ela conhece, na escola, o jovem Edward Cullen.
//             </p>

//             <p>
//                 Sempre vistos juntos, os irmãos Cullen - Edward, Emmett e Alice - e os Hale - Rosalie e Jasper - são populares na escola
//                 por seu ar misterioso e sua beleza impecável. É com Edward, contudo, que Bella sente uma ligação inexplicável. Conforme
//                 os dois se aproximam e se apaixonam, Bella descobre o segredo da família Cullen: eles são vampiros.
//             </p>

//             <p>
//                Indo contra os conselhos de seu amigo Jacob Black, que alerta sobre os perigos dos vampiros e não acredita que a família
//                Cullen mantenha sua alimentação apenas de sangue animal, Bella está decidida não apenas a viver seu amor com Edward, mas
//                pede também que o namorado a transforme em vampira. Edward, contudo, é contra a decisão.
//             </p>

//             <h2 className={style.subtitle}>ELENCO</h2>
//             <h3>Edward Cullen</h3>

//             <p>
//                 Assim como quase todos os membros da família Cullen, Edward foi transformado em vampiro por Carlisle Cullen, que tomou
//                 a decisão para salvar a vida do jovem. Por volta de 1918, Edward perdeu seus pais para a Gripe Espanhola, mas foi salvo à beira
//                 da morte, quando o médico e vampiro Carlisle o transformou e o adotou desde então.
//             </p>

//             <h3>Jacob Black</h3>

//             <p>
//                 Amigo de infância de Bella, Jacob é membro da tribo Quileute e cresceu em Forks. Com o retorno da amiga para a cidade, tenda
//                 se reaproximar dela. É ele que alerta Bella sobre as lendas de vampiros e sobre os perigos que os Cullen podem representar para a cidade.
//             </p>

//             <h3>Carlisle Cullen</h3>

//             <p>
//                 Patriarca da família Cullen, Carlisle passou por grandes dificuldades depois que foi transformado em vampiro. Filho de um caçador de
//                 lobisomens, bruxas e vampiros, no ano de 1663, o jovem viu seu pai e os demais caçadores sendo cruéis e até matando inocentes, cegos
//                 pela crença de que estavam livrando o mundo do mal. Em uma dessas caçadas, Carlisle acaba sendo transformado. Em desespero, ele passou
//                 por todo o processo de transformação sozinho, e tentou se matar diversas vezes, mas sem sucesso devido ao poder recém adquirido.
//             </p>

//             <h3>Alice Cullen</h3>

//             <p>
//                 Com uma vida complicada, por volta de 1920 Alice estava internada em uma instituição psiquiátrica. Foi lá que um funcionário do hospital
//                 a transformou e depois desapareceu sem dar mais explicações. A única coisa que a salvou de se tornar uma completa selvagem com suas
//                 novas e incompreensíveis necessidades foi o poder que adquiriu de ver o futuro. Alice viu um futuro em que estava junto a Jasper e os Cullen. Guiada
//                 por essa previsão, ela esperou conhecer Jasper e, depois, o agora casal de vampiros partiu para encontrar a família Cullen, da qual fariam parte como
//                 filhos adotivos.
//             </p>

//             <h3>Renesmee "Nessie" Cullen</h3>

//             <p>
//                 Renesmee é filha de Bella e Edward. Sem acreditar que um vampiro seria capaz de gerar uma criança, Bella acaba engravidando de Edward ainda
//                 na Lua de mel dos dois. A gravidez decorreu em uma velocidade sobre-humana e quase matou Bella, que ainda era humana. Ainda na barriga da
//                 mãe, sem que tivesse a intenção, Renesmee quebrou seus ossos e sugou seus nutrientes.
//             </p>

//         </main>
        
//     )
