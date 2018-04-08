import m from 'mithril';
import stream from 'mithril-stream';
const menu = [
  {
    text: 'Trang chủ',
    url: '',
    title: '',
    icon: ''
  }
];

const TopBar = {
  oninit: v => {
    v.state.text = stream('TopBar');
    v.state.menu = stream(menu);
  },
  view: v => m('', v.state.text)
};
export default TopBar;
