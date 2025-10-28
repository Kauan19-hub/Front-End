import { Routes, Route } from 'react-router-dom';
import { Inicial } from '../pages/Inicial';
import { Home } from '../pages/Home';
import { Curiosidade } from '../pages/Curiosidade';
import { Livro } from '../pages/Livro';

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