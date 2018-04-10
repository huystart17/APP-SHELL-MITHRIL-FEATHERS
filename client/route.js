import { DEFAULT_PATH } from './config';
import m from 'mithril';
import Landing from './component/Landing';
import Login from './entity/user/Login';
import Register from './entity/user/Register';
const routes = {
    [DEFAULT_PATH]: Landing,
    '/login': Login,
    '/register': Register,
    '/:any': { view: () => m('h4', 'Error 404!!') },
};
export default routes;
