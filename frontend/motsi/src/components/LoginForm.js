import React from 'react';
import './styles/LoginForm.css'
import {login_form} from '../apiValen';
import { Link } from "react-router-dom";
class LoginForm extends React.Component {

  handleClick = e => {
    const body= {
      email: this.props.formValues.email,
      password: this.props.formValues.password,

    };

    login_form(body).then(
      (response)=> {
        console.log(response)
    }
    )
    console.log('Button was clicked');
  };

  render() {
    return (
      <React.Fragment>
        <form className="formLogin" onSubmit={this.props.onSubmit}>
          {/* <h1>Inicio de Sesión</h1> */}

          <div className="formLogin-group">
            {/* <label>Email</label> */}
            <input
              onChange={this.props.onChange}
              className="formLogin-control"
              type="email"
              name="email"
              placeholder="Escribe tu email" required 
              value={this.props.formValues.email}
            />
          </div>
          <br></br>

          <div className="formLogin-group">
            {/* <label>Contraseña</label> */}
            <input
              onChange={this.props.onChange}
              className="formLogin-control"
              type="password"
              name="password"
              placeholder="Escribe tu contraseña" required 
              value={this.props.formValues.password}
            />
          </div>
          <hr></hr>

          <button onClick={this.handleClick} className="botonLogin btn btn-primary">
            Entrar
          </button>
          
          <p>¿No tienes cuenta?<br></br><Link to="/signin">
            <u className="linkLogin">Regístrate</u>
            </Link>
          </p>
          
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
