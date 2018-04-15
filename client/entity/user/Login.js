import m from 'mithril';
import stream from 'mithril-stream';

const Login = {
  oninit: v => {
    v.state.text = stream('');
    v.state.submit = e => {
      e.preventDefault();
      console.log(e)
    }
  },
  view: v => m('form',{action:'/users', method:'post'}
    // , m('input[type=hidden]', {name: 'strategy', value: 'local'})
    , m('label', 'email', m('input[type=email][name=email]'))
    , m('label', 'password', m('input[type=password][name=password]'))
    , m('input[type=submit]')
    , v.state.text)
};
export default Login;
