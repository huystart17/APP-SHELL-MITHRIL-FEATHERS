import m from "mithril";
import stream from "mithril-stream";
import Header from "./Header";

const Layout = {
    oninit: v => {
        v.state.text = stream("Layout");
    },
    view: v => m("", v.state.text, m(Header)
      , m("main.body", "body ")
      , m("footer"), v.children)
};
export default Layout;
