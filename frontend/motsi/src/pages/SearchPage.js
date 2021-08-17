import React from "react";
import "../pages/styles/SearchPage.css";
import { Button } from "@material-ui/core";
import Result from "../components/Result";
import Header from "../components/Header";
import Alert from "react-bootstrap/Alert";
import FilterListIcon from "@material-ui/icons/FilterList";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { DateRange } from "react-date-range";
import Slider from "@material-ui/core/Slider";
import { getAllDepartamentos, getAllMunicipios } from "../apiG";

import { Link } from "react-router-dom";
function SearchPage(props) {
  const [amountOfResults, setAmountOfResults] = React.useState(0);
  const [searchResults, setSearchResults] = React.useState([]);
  const [departamentos, setDepartamentos] = React.useState([]);
  const [municipios, setMunicipios] = React.useState("");
  const [dptoSelected, setDptoSelected] = React.useState("");
  const [dptoSelectedId, setDptoSelectedId] = React.useState("");
  const [municipioSelected, setMunicipioSelected] = React.useState("");
  const [municipioSelectedId, setMunicipioSelectedId] = React.useState("");
  const [startDate, setStartDate] = React.useState(
    (
      props.location.state
        ? props.location.state.startDate
        : props.location.state
    )
      ? props.location.state.startDate
      : new Date()
  );
  const [endDate, setEndDate] = React.useState(
    (props.location.state ? props.location.state.endDate : props.location.state)
      ? props.location.state.endDate
      : new Date()
  );
  const [precioMax, setPrecioMax] = React.useState(0); //el precio max de los json recibidos
  const [priceRange, setPriceRange] = React.useState([0, 0]);
  const [ordenarPrecioSelected, setOrdenarPrecioSelected] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElOrder, setAnchorElOrder] = React.useState(null);
  const [anchorElMun, setAnchorElMun] = React.useState(null);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const [priceRangeVisible, setPriceRangeVisible] = React.useState(false);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    console.log("start date", ranges.selection.startDate);
    console.log("end date", ranges.selection.endDate);
    setEndDate(ranges.selection.endDate);
  }

  const ITEM_HEIGHT = 40;
  const open = Boolean(anchorEl);
  const openOrder = Boolean(anchorElOrder);
  const openMun = Boolean(anchorElMun);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickMun = (event) => {
    setAnchorElMun(event.currentTarget);
  };

  const handleClickOrder = (event) => {
    setAnchorElOrder(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseDpto = (option, id) => {
    setMunicipioSelected("");
    setMunicipioSelectedId("");
    setMunicipios([]);
    setAnchorEl(null);
    console.log("dpto", option);
    console.log("id", id);
    if (option === "Ninguno") {
      setDptoSelected("");
      setDptoSelectedId("");
    } else {
      setDptoSelected(option);
      setDptoSelectedId(id);
      getMunicipios(id);
    }
  };

  const handleCloseMunicipio = (option, id) => {
    setAnchorElMun(null);
    console.log("munic", option);
    console.log("id munic", id);
    if (option === "Ninguno") {
      setMunicipioSelected("");
      setMunicipioSelectedId("");
    } else {
      setMunicipioSelected(option);
      setMunicipioSelectedId(id);
    }
  };

  const handleCloseOrder = () => {
    setAnchorElOrder(null);
  };

  const handleCloseOrderClean = () => {
    setAnchorElOrder(null);
    setOrdenarPrecioSelected("");
  };

  const handleCloseOrdermM = () => {
    setAnchorElOrder(null);
    setOrdenarPrecioSelected("De menor a mayor");
  };

  const handleCloseOrderMm = () => {
    setAnchorElOrder(null);
    setOrdenarPrecioSelected("De mayor a menor");
  };

  const resultadosOriginal = [
    {
      img: "https://images.unsplash.com/photo-1494964227851-d31bec6b1363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      departamento: "Cauca",
      departamento_id: 1,
      municipio: "Popayán",
      municipio_id: 1,
      title: "Avistamiento de aves",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, provident aliquid fuga qui exercitationem veniam esse rem culpa eum iure?",
      price: 65000,
      duration: "3 horas",
      activityDate: "25 de agosto 2021",
    },
    {
      img: "https://images.unsplash.com/photo-1446968947689-1929d80e2348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=747&q=80",
      departamento: "Cauca",
      departamento_id: 1,
      municipio: "Popayán",
      municipio_id: 1,
      title: "Avistamiento de aves",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, provident aliquid fuga qui exercitationem veniam esse rem culpa eum iure?",
      price: 250000,
      duration: "3 horas",
      activityDate: "25 de agosto 2021",
    },
    {
      img: "https://images.unsplash.com/photo-1619039324638-6fd30f080807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
      departamento: "Cauca",
      departamento_id: 1,
      municipio: "Popayán",
      municipio_id: 1,
      title: "Avistamiento de aves",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, provident aliquid fuga qui exercitationem veniam esse rem culpa eum iure?",
      price: 24000,
      duration: "3 horas",
      activityDate: "25 de agosto 2021",
    },
    {
      img: "https://images.unsplash.com/photo-1574610339916-49646b1d8394?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=773&q=80",
      departamento: "Cauca",
      departamento_id: 1,
      municipio: "Popayán",
      municipio_id: 1,
      title: "Avistamiento de aves",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, provident aliquid fuga qui exercitationem veniam esse rem culpa eum iure?",
      price: 30000,
      duration: "3 horas",
      activityDate: "25 de agosto 2021",
    },
  ];

  const rangeSelector = (event, newValue) => {
    setPriceRange(newValue);
    console.log(newValue);
  };

  const getDepartamentos = async () => {
    getAllDepartamentos().then((response) => {
      let dptoActual = "";
      const dptos = [{ dpto: "Ninguno" }];

      for (let i = 0; i < response.length; i++) {
        if (response[i].dpto === dptoActual) {
          console.log("entro a dpto igual");
        } else {
          dptoActual = response[i].dpto;
          dptos.push(response[i]);
          setDepartamentos(dptos);
          console.log(dptos);
        }
      }
    });
  };

  const getMunicipios = async (id) => {
    getAllMunicipios(id).then((response) => {
      response.unshift({ nom_mpio: "Ninguno" });
      console.log("resp municipios ninguno", response);
      setMunicipios(response);
    });
  };

  React.useEffect(() => {
    getDepartamentos();
    //pasar el id en la navegacion para renderizar el componente de vista detallada
    setSearchResults(resultadosOriginal);
    setAmountOfResults(resultadosOriginal.length);
    let mayor = 0;
    for (let i = 0; i < resultadosOriginal.length; i++) {
      if (resultadosOriginal[i].price > mayor) {
        mayor = resultadosOriginal[i].price;
        setPrecioMax(resultadosOriginal[i].price);
        setPriceRange([0, resultadosOriginal[i].price]);
        console.log("mayor", mayor);
      }
    }
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Link
        to={"/"}
        style={{
          display: "flex",
          alignItems: "left",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          className="header_icon"
          src="https://image.flaticon.com/icons/png/512/483/483355.png"
          alt=""
        />
      </Link>

      <div className="searchPage_info">
        <p>{amountOfResults} resultados</p>

        <h1>Resultados búsqueda</h1>
        <div
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              <FilterListIcon />
              <h4>Filtrar por</h4>
            </div>
            <div>
              <Button variant="outlined" onClick={handleClick}>
                {dptoSelected.length > 0 ? dptoSelected : "Departamento"}
              </Button>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    marginTop: 45,
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "17ch",
                  },
                }}
              >
                {departamentos.length > 0
                  ? departamentos.map((item, index) => (
                      <MenuItem
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={() =>
                          handleCloseDpto(item.dpto, item.cod_depto)
                        }
                      >
                        {item.dpto}
                      </MenuItem>
                    ))
                  : null}
              </Menu>

              <Button variant="outlined" onClick={handleClickMun}>
                {municipioSelected.length > 0 ? municipioSelected : "Municipio"}
              </Button>
              <Menu
                id="long-menu"
                anchorEl={anchorElMun}
                keepMounted
                open={openMun}
                onClose={() => {
                  setAnchorElMun(null);
                }}
                PaperProps={{
                  style: {
                    marginTop: 45,
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "17ch",
                  },
                }}
              >
                {(municipios ? municipios.length > 0 : municipios)
                  ? municipios.map((item, index) => (
                      <MenuItem
                        key={index}
                        // selected={option === "Pyxis"}
                        onClick={() =>
                          handleCloseMunicipio(item.nom_mpio, item.cod_mpio)
                        }
                      >
                        {item.nom_mpio}
                      </MenuItem>
                    ))
                  : null}
              </Menu>

              <Button
                variant="outlined"
                onClick={() => setDatePickerVisible(!datePickerVisible)}
              >
                Fecha
              </Button>
              <Button
                variant="outlined"
                onClick={() => setPriceRangeVisible(!priceRangeVisible)}
              >
                Precio
              </Button>
            </div>
          </div>
          <div
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <SortByAlphaIcon style={{ marginRight: 5 }} />
              <h4>Ordenar</h4>
            </div>

            <Button
              aria-controls="menu-order"
              aria-haspopup="true"
              variant="outlined"
              onClick={handleClickOrder}
            >
              {ordenarPrecioSelected.length > 0 &&
              ordenarPrecioSelected !== "Limpiar Filtro"
                ? ordenarPrecioSelected
                : "Precio"}
            </Button>
            <Menu
              id="menu-order"
              anchorEl={anchorElOrder}
              keepMounted
              open={openOrder}
              onClose={handleCloseOrder}
              PaperProps={{
                style: {
                  marginTop: 45,
                },
              }}
            >
              <MenuItem onClick={handleCloseOrdermM}>De menor a mayor</MenuItem>
              <MenuItem onClick={handleCloseOrderMm}>De mayor a menor</MenuItem>
              {ordenarPrecioSelected.length > 0 ? (
                <MenuItem onClick={handleCloseOrderClean}>
                  Limpiar filtro
                </MenuItem>
              ) : null}
            </Menu>
          </div>
        </div>
      </div>
      <div className="search_page"></div>

      <p style={{ marginLeft: 20 }}>
        Rango de fechas seleccionado: {startDate.toDateString()} -
        {endDate.toDateString()}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Button
          style={{
            display: "flex",
            width: "95%",
            padding: 10,
            marginLeft: 30,
            marginRight: 30,
          }}
          color="primary"
          variant="outlined"
          startIcon={<FilterListIcon />}
          // onClick={} //llamar al metodo que busca
        >
          Aplicar filtros
        </Button>
      </div>

      {priceRangeVisible ? (
        <>
          <Slider
            style={{ width: "50%", left: 40 }}
            min={0}
            max={precioMax}
            value={priceRange}
            onChange={rangeSelector}
            valueLabelDisplay="off"
          />
          <p style={{ marginLeft: 40 }}>
            Tu rango de precio se encuentra entre $ {priceRange[0].toString()} y
            $ {priceRange[1].toString()}
          </p>
        </>
      ) : null}

      {searchResults.length > 0 ? (
        searchResults.map((item, index) => {
          return (
            <div key={index}>
              <Result
                img={item.img}
                departamento={item.departamento}
                municipio={item.municipio}
                title={item.title}
                description={item.description}
                activityDate={item.activityDate}
                price={item.price}
                duration={item.duration}
              />
            </div>
          );
        })
      ) : (
        <div>
          <Alert variant="info" style={{ marginTop: 50, marginBottom: 50 }}>
            Su búsqueda no produjo ningún resultado. Intente con otro filtro.
          </Alert>
        </div>
      )}

      {datePickerVisible ? (
        <div className="search" style={{ top: 330, left: 60 }}>
          <DateRange ranges={[selectionRange]} onChange={handleSelect} />
          {/* <h2>
          Number of guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" /> */}
          <Button
            onClick={() => {
              setDatePickerVisible(false);
            }}
          >
            {" "}
            OK
          </Button>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default SearchPage;
