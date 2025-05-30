const routes = {
    '#home': '<h2>Bienvenido a la página de Inicio</h2><p>Este es el contenido de la página de inicio</p>',
    '#about': '<h2>Acerca de</h2><p>Somos una empresa innovadora</p>',
    '#contact': '<h2>Contacto</h2><p>Puedes contactarnos via email.</p>',
    
};

function router() {
    const hash = window.location.hash || '#home';
    const content = document.getElementById('content');
    content.innerHTML = routes[hash] || '<h2>Página no encontrada</h2><p>Por favor, elige una página válida.</p>';
    }

window.addEventListener('hashchange', router);
window.addEventListener('load', router);