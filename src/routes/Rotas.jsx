import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react"; // Lazy Loading, importante para desempenho 100%

// Importe sob demanda, que só carrega ao acessar
const Inicial = lazy(() => import("../pages/inicial/inicial.jsx"));
const Home = lazy(() => import("../pages/home/home.jsx"));
const Curiosidades = lazy(() => import("../pages/curiosidades/curiosidades.jsx"));
const Livro = lazy(() => import("../pages/livro/livro.jsx"));
// Todas as páginas importadas aqui, para a navegação funcionar

export function MinhasRotas() {
    return (
        // Suspense que mostra algo com tempo determinado enquanto a rota é carregada
        <Suspense fallback={<p style={{ color: "#d21111", textAlign: "left", fontFamily: "Arial" }}>Carregando...</p>}>
            <Routes>
                <Route path="/" element={<Inicial />}>
                    <Route index element={<Home />} />
                    <Route path="livro" element={<Livro />} />
                    <Route path="curiosidade" element={<Curiosidades />} />
                </Route>
            </Routes>
        </Suspense>

    );
}