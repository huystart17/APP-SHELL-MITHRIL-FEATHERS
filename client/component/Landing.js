import m from 'mithril';
import stream from 'mithril-stream';

const Landing = {
  oninit: v => {
    v.state.text = stream('');
  },
  view: v => m('', v.state.text)
};
export default Landing;
