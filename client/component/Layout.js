import m from 'mithril';
import Header from './Header';
import Slide from './Slide.js';
const Layout = {
    oninit: v => {},
    view: v =>
        m(
            '.container',
            m(
                '.columns',
                m(Header),
                m(
                    '.col-lg-10.col-md-12.col-sm-12 col-mx-auto col-10',

                    m(Slide),
                    m('main.body', v.children),
                    m('footer', 'Đây là footer'),
                ),
            ),
        ),
};
export default Layout;
