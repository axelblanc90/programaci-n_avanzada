import Header from '../templates/Header';
import Home from '../pages/Home';
import Launch from '../pages/Launch';
import Error404 from '../pages/Error404';


const routes = {
    '/': Home,
    '/launch/:id': Launch,
}

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();

    const hash = location.hash.slice(1).toLowerCase() || '/';
    
    // Manejo de rutas dinámicas
    let render;
    if (hash === '/') {
        render = routes['/'];
    } else if (hash.match(/^\/launch\/([a-z0-9\-_]+)$/)) {
        render = routes['/launch/:id'];
    } else {
        render = Error404;
    }
    content.innerHTML = await render();
}

export default router;
