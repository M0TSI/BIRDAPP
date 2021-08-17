import React from 'react';

import SigninForm from '../components/SigninForm';
import registerphotoform from '../images/humming-bg-login.jpg';
import './styles/Signin.css'
import Header from '../components/Header';
import logo from '../images/logo.jpeg'



class Signin extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
        firstName: '',
        lastName: '',
        email: '',
        password:'',
        TipoDeUsuario:'',
      },  
     
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
          <div className="containerSignin">
            <div className="formSignin">
              <div className="logoImageSignin">
                  <img src={logo} alt="" />  
              </div>
              <SigninForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                
                error={this.state.error}
              />
            </div>
            <div className="figureSignin">
              <img src={registerphotoform} alt="" />
            </div>
          </div><br></br>
        
      </React.Fragment>
    );
  }
}

export default Signin;
