import { Navegacao } from '../../components/navegacao';
import { Conteudo } from '../../components/Conteudo';
import { Outlet } from 'react-router-dom';
import { Footer } from '../livro/footer';

export function Inicial() {
    return (
        <>
            <Navegacao/>
            <Conteudo/>
            <Outlet/> {/* Rotas filhas aqui */}
            <Footer/>

        </>
    )
}