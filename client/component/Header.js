import m from 'mithril';
import stream from 'mithril-stream';
import App from './../app.js';

const Header = {
    oninit: v => {
        v.state.text = stream('Header');
    },
    view: v =>
        m(
            'header.col-12',
            m(
                '.columns',
                m(
                    '.col-10.col-mx-auto.',
                    m(
                        'nav.navbar.bg-secondary',
                        m(
                            'section.navbar-section.mt-2',
                            App.menu.map(item =>
                                m(
                                    'a.btn.btn-link',
                                    {
                                        key: item.url,
                                    },
                                    m(`i.fas.${item.icon}`),
                                    ' ',
                                    item.text,
                                ),
                            ),
                        ),
                        m(
                            'section.navbar-section',
                            m(
                                '.input-group.input-inline',
                                m("input.form-input[placeholder='Tìm kiếm']"),
                                m('button.btn.btn-primary.input-group-btn', m('i.fas.fa-search')),
                            ),
                        ),
                    ),
                ),
            ),
            m(
                'nav.col-12.columns.py-2.bg-dark',
                {
                    style: {
                        background: '#91B550',
                    },
                },
                m(
                    '.col-10.col-mx-auto',
                    m(
                        'button.btn.btn-link',
                        m('img.img-responsive.logo', {
                            src: App.logo,
                        }),
                    ),
                    m(
                        '.d-inline-block.btn-group',
                        m('a.text-light.mx-2', 'Hà Nội ', m('i.fas.fa-caret-down')),
                        m('a.text-light.mx-2', 'Căt tóc ', m('i.fas.fa-caret-down')),
                        m(
                            '.has-icon-right.d-inline-block',
                            m("input.form-input[placeholder='Tìm kiếm'][type='text']"),
                            m('i.form-icon.fas.fa-map-marker'),
                        ),
                    ),
                ),
            ),
        ),
};
export default Header;
