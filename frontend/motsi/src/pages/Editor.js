import React from 'react';

import './styles/Editor.css';
import CardForm from '../components/CardForm';
import CardAvesE from '../components/CardAvesE';
// import { getAllDepartamentos, getAllMunicipios } from "../apiG";
// import { Get_InfoPlan, Post_InfoPlan } from '../api_Manuel';


class Editor extends React.Component {
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
      aves: []
    },
  };

  HandleChangeFile(event){
    var array = this.state.form.aves.slice();
    array.push(URL.createObjectURL(event.target.files[0]));
    this.setState({
      form: {
        ...this.state.form.CardForm,
        aves: array,
      },
    });
  }

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

  Get_InfoPlan = (id) => { };

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

  componentDidMount() {
    this.getDepartamentos();
    this.setState({
      form: {
        ...this.state.form,
        aves: [
          {
            src: "https://live.staticflickr.com/4667/40481871362_125ff34982_b.jpg",
          },
          {
            src: "https://live.staticflickr.com/4667/40481871362_125ff34982_b.jpg",
          },
          {
            src: "https://live.staticflickr.com/4667/40481871362_125ff34982_b.jpg",
          },
          {
            src: "https://live.staticflickr.com/4667/40481871362_125ff34982_b.jpg",
          },
        ],
      },
    });
  }

  render() {
    console.log("HEllo World", this.state.form.aves);
    return (
      <React.Fragment>
        <div className="content2">
          <div className="container2">
            <div className="centro2">
              <div>
                <h1>Editar Plan</h1>
              </div>
            </div>
            <div className="centro2">
              <div>
                <CardForm
                  HandleChangeFile={this.HandleChangeFile}
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
          <div className="galeria">
            <div className="tGaleria">
              <h2>Galería</h2>

            </div>

            {(this.state.form.aves ? this.state.form.aves.length > 0 : this.state.form.aves) ?
              this.state.form.aves.map((item, index) => {
                return (
                  <CardAvesE src={item.src} key={index} />
                );

              })
              : null}

          </div>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Editor;
