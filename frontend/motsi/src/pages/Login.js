import React from 'react';
import LoginForm from '../components/LoginForm';
import registerphotoform from '../images/humming-bg-login.jpg';
import './styles/Login.css'
import Header from '../components/Header';
import logo from '../images/logo.jpeg'
class Login extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
        email: '',
        password:''
      }
  };

  handleChange = e => {
    this.setState({

      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      //await api.cards.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
          <Header/>
          <div className="containerLogin">
            <div className="formLogin">
            <div className="logoImageLogin">
                <img src={logo} alt="" />
              </div>
              <LoginForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          <div className="figureLogin">
              <img src={registerphotoform} alt="figureLogin" />
          </div>
        </div><br></br>
      </React.Fragment>
    );
  }
}

export default Login;
