import { Cabecalho } from '../components/Cabecalho';
import { BarraNavegacao} from '../components/BarraNavegacao';
import { Conteudo } from '../components/Conteudo';
import { Outlet } from 'react-router-dom';

export function Inicial() {
    return (
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Conteudo/>
            <Outlet/>

        </>
    )
}