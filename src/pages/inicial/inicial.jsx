import { Navegacao} from '../../components/Navegacao';
import { Conteudo } from '../../components/Conteudo';
import { Outlet } from 'react-router-dom';

export function Inicial() {
    return (
        <>
            <Navegacao/>
            <Conteudo/>
            <Outlet/>

        </>
    )
}