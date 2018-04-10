import m from 'mithril';
import stream from 'mithril-stream'

const Register = {
    oninit: v => {
        v.state.text = stream('Register')
    }
    , view: v => m('', v.state.text)
};
export default Register;
