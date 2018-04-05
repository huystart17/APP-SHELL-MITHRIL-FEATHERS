const m = require("mithril");
const stream = require("mithril/stream");
const Landing = {
    oninit: v => {
        v.state.text = "Landing";
    },

    view: v => m("", v.state.text),
};
module.exports = Landing;
