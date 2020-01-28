import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../common/textField';
import { loginValidationSchema } from '../validation/auth.validationSchema';
import { connect } from 'react-redux';
import { ILogin } from '../interface/auth.interface';
import { login } from '../../service/api/auth.service';

interface ILoginProps {
  login: (username: string, password: string) => void;
}

interface ILoginState {
  username: string;
  password: string;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: Readonly<ILoginProps>) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = async (event: any) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    // const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
    // this.props.onSubmit(resp.data);
    // this.setState({ companyName: '' });
  };

  render() {
    console.log('this.state', this.state);
    return (
      <div className="reset-block">
        {
          <form onSubmit={this.handleSubmit}>
            <span className="formtext">Username</span>
            <input
              type="text"
              value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}
              required
            />

            <span className="formtext">Password</span>
            <input
              type="text"
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
              required
            />
            <button>Login</button>
          </form>
        }
      </div>
    );
  }
}

const mapStateToProps = (store: any) => {
  const {
    authReducer: {
      // isLoggedIn,
      //   user
    }
  } = store;
  return {
    // user
    // isLoggedIn
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (username: string, password: string) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
