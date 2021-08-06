import React from 'react';

class CardForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
        
          <div className="form-group">
            <label>Titulo</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="title"
              value={this.props.formValues.title}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="description"
              value={this.props.formValues.description}
            />
          </div>
          <div className="form-group">
            <label>Precio</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="price"
              value={this.props.formValues.price}
            />
          </div><br></br>

        
          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default CardForm;
