import React from 'react';

import SigninForm from '../components/SigninForm';
import registerphotoform from '../images/humming-bg-login.jpg';

class Signin extends React.Component {
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
            <div className="col-6">
              <img src={registerphotoform} alt="" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
