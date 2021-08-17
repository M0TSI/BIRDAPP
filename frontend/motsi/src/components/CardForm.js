import React from 'react';
import { cards_form } from '../api';
import SelectorFoto from '../components/SelectorFoto.js';
import './styles/CardForm.css';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@material-ui/core";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class CardForm extends React.Component {
  handleClick = (e) => {
    const body = {
      title: this.props.formValues.title,
      description: this.props.formValues.description,
      price: this.props.formValues.price,
      // pais: this.props.formValues.pais,
      departamento: this.props.formValues.departamento,
      departamentoId: this.props.formValues.departamentoId,
      ciudadId: this.props.formValues.ciudadId,
      ciudad: this.props.formValues.ciudad,
      fechaInicio: this.props.formValues.fechaInicio,
      duracion: this.props.formValues.duracion,
      src: this.props.formValues.src,
    };
    cards_form(body).then((response) => {
      console.log(response);
    });
    console.log("Button was clicked");
  };

  render() {
    return (
      <React.Fragment>
        <br></br>
        <br></br>
        <form className="form-content" onSubmit={this.props.onSubmit}>
          <label for="photo" style={{ textAlign: "center" }}>
            Incluya una foto de portada
          </label>
          <SelectorFoto />
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
            <label>Descripción de la Actividad</label>
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
          </div>
          {/* <div className="form-group">
            <label>Pais</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="pais"
              value={this.props.formValues.pais}
            />
          </div> */}
          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <label>Departamento</label>
            <Select
              name="departamento"
              open={this.props.openDpto}
              onClose={this.props.handleCloseDpto}
              onOpen={this.props.handleOpenDpto}
              value={
                this.props.formValues.departamento.length > 0 &&
                this.props.formValues.departamento !== "Ninguno"
                  ? this.props.formValues.departamento
                  : ""
              }
              onChange={this.props.onChange}
              MenuProps={MenuProps}
            >
              {this.props.formValues.departamentos.length > 0
                ? this.props.formValues.departamentos.map((item, index) => (
                    <MenuItem
                      value={item.dpto}
                      key={index}
                      onClick={() =>
                        this.props.handleCloseDepartamento(
                          item.dpto,
                          item.cod_depto
                        )
                      }
                    >
                      {item.dpto}
                    </MenuItem>
                  ))
                : null}
            </Select>
            {/* <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="departamento"
              value={this.props.formValues.departamento}
            /> */}
          </div>
          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <label>Ciudad</label>
            <Select
              name="ciudad"
              open={this.props.openCiudad}
              onClose={this.props.handleCloseCiudad}
              onOpen={this.props.handleOpenCiudad}
              value={
                this.props.formValues.ciudad.length > 0 &&
                this.props.formValues.ciudad !== "Ninguno"
                  ? this.props.formValues.ciudad
                  : ""
              }
              onChange={this.props.onChange}
              MenuProps={MenuProps}
            >
              {this.props.formValues.ciudades.length > 0
                ? this.props.formValues.ciudades.map((item, index) => (
                    <MenuItem
                      value={item.nom_mpio}
                      key={index}
                      onClick={() =>
                        this.props.handleCloseMunicipio(
                          item.nom_mpio,
                          item.cod_mpio
                        )
                      }
                    >
                      {item.nom_mpio}
                    </MenuItem>
                  ))
                : null}
            </Select>
            {/* <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="ciudad"
              value={this.props.formValues.ciudad}
            /> */}
          </div>
          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <label>Fecha de Inicio</label>
            <DatePicker
              onCalendarOpen={this.props.handleClickDate}
              onCalendarClose={this.props.handleClickDate}
              locale="es"
              selected={this.props.formValues.fechaInicio}
              dateFormat="MMMM d, yyyy"
              onChange={(date) => this.props.handleSelect(date)}
            />
            {/* <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="fechaInicio"
              value={this.props.formValues.fechaInicio}
            /> */}
          </div>
          <div className="form-group">
            <label>Duración (horas)</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="duracion"
              value={this.props.formValues.duracion}
            />
          </div>
          <label for="photoAves">Incluya las Fotos de las Aves</label>
          {!this.props.formValues.datePickerVisible ? <SelectorFoto HandleChangeFile={this.props.HandleChangeFile} /> : null}
          <br></br>

          <Button
            onClick={this.handleClick}
            variant="contained"
            color="default"
          >
            Guardar
          </Button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
          <br></br>
        </form>
      </React.Fragment>
    );
  }
}

export default CardForm;
