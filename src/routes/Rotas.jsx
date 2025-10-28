import { Routes, Route } from 'react-router-dom';
import { Inicial } from '../pages/inicial';
import { Home } from '../pages/home';
import { Curiosidade } from '../pages/curiosidade';
import { Livro } from '../pages/livro';

export function MinhasRotas() {
    return (
        <Routes>
            <Route path='/' element={<Inicial/>}>
                <Route index element={<Home/>}/>
                <Route path="livro" element={<Livro/>}/>
                <Route path="curiosidade" element={<Curiosidade/>}/>
            </Route>
        </Routes>
        
    )
}