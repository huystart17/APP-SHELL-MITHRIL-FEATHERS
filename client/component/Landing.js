import m from 'mithril';
import stream from 'mithril-stream';
import Layout from './Layout';
import App from '../app.js';
const Landing = {
    oninit: v => {},
    view: v => [m('title', App.title), m(Layout, v.children)],
};
export default Landing;
