import { Routes, Route } from 'react-router-dom';
import { Inicial } from '../pages/inicial/inicial';
import { Home } from '../pages/home/home.jsx';
import { Curiosidade } from '../pages/curiosidades/curiosidade';
import { Livro } from '../pages/livro/livro';
// Todas as páginas importadas aqui, para a navegação funcionar

export function MinhasRotas() {
    return (
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Home/>}/>
                <Route path="livro" element={<Livro/>}/>
                <Route path="curiosidade" element={<Curiosidade/>}/>
            </Route>
        </Routes>
        
    );
}