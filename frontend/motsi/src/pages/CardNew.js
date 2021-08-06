import React from 'react';

import './styles/CreateNew.css'
import CardForm from '../components/CardForm';
import imagecardform from '../images/imageformcreate.jpg';


class CardNew extends React.Component {
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

      this.props.history.push('/Perfil');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col">
          <div className="col-6">
              <img className="image"src={imagecardform} alt="imageCreateNewForm" />
            </div>
            <div className="col-8">
              <h1>Nuevo plan</h1>
              <CardForm
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

export default CardNew;
