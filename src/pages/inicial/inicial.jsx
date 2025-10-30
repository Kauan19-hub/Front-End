import { Navegacao } from '../../components/navegacao';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/footer';

export function Inicial() {
    return (
        <div>
            <Navegacao/>
            <Outlet/>  {/* Rotas filhas aqui, páginas abertas */}
            <Footer/> {/* Footer fixo */}
        </div>
    );
}