import { Cabecalho } from '../../components/cabecalho';
import { BarraNavegacao } from '../../components/navegacao';
import { Conteudo } from '../../components/conteudo';
import { Outlet } from 'react-router-dom';

export function inicial() {
    return (
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Conteudo/>
            <Outlet/>

        </>
    )
}