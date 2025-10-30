import style from '../livro/livro.module.css';

export function Livro() {
    return (
        <>
            <main className={style.container}>
                <section className={style.header}>
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit magni sunt nostrum animi cupiditate tempora, sed, numquam distinctio maiores nesciunt eveniet illum quasi voluptas rerum doloremque neque itaque quod exercitationem.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus fuga quo omnis, aperiam itaque a vitae laboriosam consectetur, voluptatibus distinctio nostrum. Alias eum neque minima adipisci eligendi fugiat blanditiis.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum repellendus sed. Debitis excepturi facere doloremque tenetur sequi aliquid, rerum at quod eveniet nemo accusamus! Facere animi similique quis eos.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}