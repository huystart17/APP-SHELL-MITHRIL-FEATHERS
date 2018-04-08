import { DEFAULT_PATH } from './config';
import m from 'mithril';
import Landing from './component/Landing';
import Login from './enity/user/Login';
import Register from './enity/user/Register';
const routes = {
  [DEFAULT_PATH]: Landing,
  '/login': Login,
  '/register': Register,
  '/:any': { view: () => m('h4', 'Error 404!!') }
};
export default routes;
