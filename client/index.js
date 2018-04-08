import routes from './route';
import m from 'mithril';
import { DEFAULT_PATH } from './config';
const root = document.getElementById('app');
m.route(root, DEFAULT_PATH, routes);
