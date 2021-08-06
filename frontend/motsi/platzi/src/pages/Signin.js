import React from 'react';

import './styles/CardNew.css';
import header from '../images/platziconf-logo.svg';

import SigninForm from '../components/SigninForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class Login extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
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
      await api.cards.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push('/home');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="CardNew__hero">
          <img
            className="CardNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">

            <div className="col-6">
              <h1>Signin</h1>
              <SigninForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
