import m from 'mithril';
import stream from 'mithril-stream';

const Layout = {
  oninit: v => {
    v.state.text = stream('Layout');
  },
  view: v => m('', v.state.text, m('header.header', m('nav.navbar'), 'This is '), m('main.body', 'body '), m('footer'), v.children)
};
export default Layout;
