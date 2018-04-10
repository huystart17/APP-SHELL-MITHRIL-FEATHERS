import m from 'mithril';
import stream from 'mithril-stream';

const app = {
  oninit: v => {
    v.state.text = stream('app');
  },
  view: v => m('', v.state.text)
};
export default app;
