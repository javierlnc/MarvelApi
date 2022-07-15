import Header from '../templates/Header';
import Home from '../pages/Home';
import HomeCharacter from '../pages/HomeCharacter';
import Comics from '../pages/Comics';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/':Home,
    '/homecharacter':HomeCharacter,
    '/:id':Comics,
    '/HomeCharacter/:id':Character,
}

const router = async ()=>{
    const header = null || document.querySelector('#header');
    const content = null || document.querySelector('#content');

    header.innerHTML = await Header();
    let hash = getHash();
    console.log('hash '+hash)
    let route = await resolveRoutes(hash);
    console.log('route '+route)
    let render = routes[route]?routes[route] : Error404;
    content.innerHTML=await render();

};
export default router;