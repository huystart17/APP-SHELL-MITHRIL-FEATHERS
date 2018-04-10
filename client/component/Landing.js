import m from 'mithril';
import stream from 'mithril-stream';
import Layout from "./Layout";

const Landing = {
  oninit: v => {
    v.state.text = stream('');
  },
  view: v => m(Layout)
};
export default Landing;
