import React from 'react';

import './styles/CardNew.css';
import CardForm from '../components/CardForm';
import imagecardform from '../images/imageformcreate.jpg';
// import {Post_InfoPlan} from '../api_Manuel';
// import { getAllDepartamentos, getAllMunicipios } from "../apiG";

class CardNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      title: "",
      description: "",
      price: "",
      // pais:'',
      departamentos: [],
      departamento: "",
      departamentoId: "",
      ciudades: [],
      ciudad: "",
      ciudadId: "",
      fechaInicio: new Date(),
      duracion: "",
      src: "",
      openDpto: false,
      openCiudad: false,
      datePickerVisible: false,
    },
  };

  handleSelect = (date) => {
    this.setState({
      form: {
        ...this.state.form,
        fechaInicio: date,
      },
    });
  };

  handleClickDate = () => {
    this.setState({
      form: {
        ...this.state.form,
        datePickerVisible: !this.state.form.datePickerVisible,
      },
    });
  };

  // getDepartamentos = async () => {
  //   getAllDepartamentos().then((response) => {
  //     let dptoActual = "";
  //     const dptos = [{ dpto: "Ninguno" }];

  //     for (let i = 0; i < response.length; i++) {
  //       if (response[i].dpto === dptoActual) {
  //         console.log("entro a dpto igual");
  //       } else {
  //         dptoActual = response[i].dpto;
  //         dptos.push(response[i]);
  //         this.setState({
  //           form: {
  //             ...this.state.form,
  //             departamentos: dptos,
  //           },
  //         });
  //         console.log(dptos);
  //       }
  //     }
  //   });
  // };

  // getMunicipios = async (id) => {
  //   getAllMunicipios(id).then((response) => {
  //     response.unshift({ nom_mpio: "Ninguno" });
  //     console.log("resp municipios ninguno", response);
  //     this.setState({
  //       form: {
  //         ...this.state.form,
  //         ciudades: response,
  //       },
  //     });
  //   });
  // };

  handleOpenDpto = () => {
    this.setState({
      form: {
        ...this.state.form,
        openDpto: true,
      },
    });
  };

  handleOpenCiudad = () => {
    this.setState({
      form: {
        ...this.state.form,
        openCiudad: true,
      },
    });
  };

  handleCloseDpto = () => {
    this.setState({
      form: {
        ...this.state.form,
        openDpto: false,
      },
    });
  };

  handleCloseCiudad = () => {
    this.setState({
      form: {
        ...this.state.form,
        openCiudad: false,
      },
    });
  };

  handleCloseDepartamento = (option, id) => {
    this.setState({
      form: {
        ...this.state.form,
        ciudad: "",
        ciudadId: "",
        ciudades: [],
        openDpto: false,
      },
    });

    if (option === "Ninguno") {
      this.setState({
        form: {
          ...this.state.form,
          departamento: "",
          departamentoId: "",
        },
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          departamento: option,
          departamentoId: id,
        },
      });
      this.getMunicipios(id);
    }
  };

  handleCloseMunicipio = (option, id) => {
    console.log("este es el municipio", option);
    console.log("este es el id del munic", id);

    this.setState({
      form: {
        ...this.state.form,
        openCiudad: false,
      },
    });

    if (option === "Ninguno") {
      this.setState({
        form: {
          ...this.state.form,
          ciudad: "",
          ciudadId: "",
        },
      });
    } else {
      this.setState({
        form: {
          ...this.state.form,
          ciudad: option,
          ciudadId: id,
        },
      });
    }
  };

  // postInfoPLan = () => {
  //   const body = {
  //     title: this.state.form.title,
  //     description: this.state.form.description,
  //     price: this.state.form.price,
  //     // pais: this.state.form.pais,
  //     departamento: this.state.form.departamento,
  //     departamentoId: this.state.form.departamentoId,
  //     ciudadId: this.state.form.ciudadId,
  //     ciudad: this.state.form.ciudad,
  //     fechaInicio: this.state.form.fechaInicio,
  //     duracion: this.state.form.duracion,
  //     src: this.state.form.src,
  //   };
  //   Post_InfoPlan(body).then((response) => {
  //     console.log(response);
  //   });
  // };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      //await api.cards.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/Perfil");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // componentDidMount() {
  //   this.getDepartamentos();
  // }

  render() {
    return (
      <React.Fragment>
        <div className="content">
          <div className="container">
            <div className="centro">
              <div>
                <h1>Nuevo plan</h1>
              </div>
            </div>
            <div className="centro">
              <div>
                <CardForm
                  handleClickDate={this.handleClickDate}
                  handleSelect={this.handleSelect}
                  handleOpenDpto={this.handleOpenDpto}
                  handleOpenCiudad={this.handleOpenCiudad}
                  handleCloseDpto={this.handleCloseDpto}
                  handleCloseCiudad={this.handleCloseCiudad}
                  handleCloseDepartamento={this.handleCloseDepartamento}
                  handleCloseMunicipio={this.handleCloseMunicipio}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                  formValues={this.state.form}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default CardNew;
