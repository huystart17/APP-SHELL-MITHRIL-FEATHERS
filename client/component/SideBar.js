import m from 'mithril';
import stream from 'mithril-stream';

const Sidebar = {
  oninit: v => {
    v.state.text = stream('Sidebar');
  },
  view: v => m(''
    , v.state.text)
};
export default Sidebar;
