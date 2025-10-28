import style from '../styles/cabecalho.module.css';

// Export function (name of your file)
export function cabecalho() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>VIDEO AQUI</h1>
        </header>

    )
}