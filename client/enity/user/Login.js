import m from 'mithril';
import stream from 'mithril-stream'

const Login = {
    oninit: v => {
        v.state.text = stream('Login 1 2 4 5 6 7 8 9 10 11 12 13 1212')
    }
    , view: v => m('', v.state.text)
};
export default Login;
