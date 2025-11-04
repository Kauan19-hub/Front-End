import { useState } from "react"; // Fundamental: armazena e atualiza valores dentro de um componente funcional
import style from "../curiosidades/curiosidades.module.css";

// Importe das imagens
import ali from "../../assets/images/ali.webp";
import bella from "../../assets/images/bella.webp";
import edw from "../../assets/images/edw.webp";
import jack from "../../assets/images/jack.webp";
import renes from "../../assets/images/renes.webp";
import vila from "../../assets/images/vila.webp";
import vila2 from "../../assets/images/vila2.webp";

// Array que possui os slides, cada imagem com um texto
const slider = [
    { img: renes, texto: "Renesmee é filha de Bella e Edward. Uma personagem híbrida com poder de planejar seu futuro tocando no seu rosto."},
    { img: jack, texto: "Jacob é o melhor amigo de Bella, com uma habilidade de se transformar em um lobo para proteger sua família." },
    { img: edw, texto: "Edward é um personagem vampiro que se apaixona por Bella e criam uma família mais à frente."},
    { img: bella, texto: "Bella é mãe de Renesmee, e personagem principal da saga."},
    { img: ali, texto: "Alice possui a habilidade de prever o futuro, além de ser um dos personagens aliados da saga."},
    { img: vila2, texto: "Emmet também é um vampiro, e faz parte da família Clã Cullen, é irmão adotivo de Edw, Alice, Jasper e Esme."},
    { img: vila, texto: "Dakota é uma vilã, membra da família 'Os Volturi'."},

];

// Principal função
export default function Curiosidades() {
    const [index, setIndex] = useState(0);

    // Classe CSS
    const getPositionClass = (i) => {
        if (i === index) return style.active;
        if (i === (index - 1 + slider.length) % slider.length) return style.left;
        if (i === (index + 1) % slider.length) return style.right;
        return style.hidden; //Slides ocultos da tela

    };

    // Renderiza o layout dos components
    return (
        <main className={style.container}>
            <div className={style.sliders}>
       
                <div className={style.slideContainer}>
                    {slider.map((slide, i) => (
                        <div key={i} className={`${style.slide} ${getPositionClass(i)}`}>
                            <img src={slide.img} alt="Personagem" className={style.image}/>
                            {i === index && (
                                <div className={style.textBox}>
                                    <p>{slide.texto}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={style.dots}>
                {slider.map((_, i) => (
                    <span
                        key={i}
                        className={`${style.dot} ${i === index ? style.activeDot : ""}`}
                        onClick={() => setIndex(i)}
                    ></span>
                ))}
            </div>
        </main>
    );
}