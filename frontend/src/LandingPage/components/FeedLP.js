import React, { Component } from 'react'
import '../components/styles/FeedLP.css';
import axios from 'axios'

export default class FeedLP extends Component {
    state = {
        nombre: '',
        email: '',
        phone: '',
    }
    /*async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/guider');
        }*/
    onSubmit = async (e) => {
        e.preventDefault();
            const newProveedor = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
            };
            axios.post('http://localhost:4002/new-contact', newProveedor);
        }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
            <div id="Form">
            <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>registrate</h4>
                <form onSubmit={this.onSubmit}>
                    {/* Nombre */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={this.onInputChange}
                            name="firstname"
                            value={this.state.name}
                            required />
                    </div>
                    {/* email */}
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="email"
                            name="email"
                            onChange={this.onInputChange}
                            value={this.state.email}
                            required>
                        </textarea>
                    </div>
                    {/* Numero de contacto */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Número de contacto (opcional)"
                            onChange={this.onInputChange}
                            name="phone"
                            value={this.state.phone}
                            required />
                    </div>
                    <button className="btn btn-primary">
                        Registrarme
                    </button>
                </form>
                <img alt='' src="Estrella_amarilla.png" height="70px" width="70px" id="estrella"></img>
            </div>
        </div>
        </div>
        </React.Fragment>
        
        )
    }
}
