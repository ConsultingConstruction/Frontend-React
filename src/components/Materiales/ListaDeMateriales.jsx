import React from "react";
import { TableContext } from "../../context/Materiales/TableContext";
import { RiFileEditFill } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { Estructura } from "./Estructura";
import "./TableApi.css";
import { ModalMateriales } from "./ModalMateriales";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";
import { Clasificacion } from "./Clasificacion";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { SwipeableTemporaryDrawer } from "./SwipeableTemporaryDrawer";

function ListaDeMateriales() {
  const {
    listarConcretosMateriales,
    datoBaseTabla,
    resetTabla,
    listarTMA,
    listarValorEsfuerzo,
    listarTipoResistencia,
    listarDensidad,
    listarFlujoRev,
    listarRevenimiento,
    listarFibraConcre,
    listarClasExposicion,
    listarSistColocacion,
    listarConcretosMaterialesCopia,
    setListarConcretosMaterialesCopia,
    estructura,
  } = React.useContext(TableContext);

  const datosGenerales = {
    numMat: "numMat",
    codigoOmc: "Código",
    Consecutivo: "No.",
    descriCorta: "Descripción Corta",
    descriLarga: "Descripción Larga",
    Comentarios: "Comentarios",
    palabrasCve: "palabras Clave",
    desCorEng: "Descripción Corta Inglés",
    desLargEng: "Descripción Larga Inglés",
    fuenteInf: "fuente Información",
    fecRegInf: "fecha de registro",
    codigoBimsa: "Código Bimsa",
    Nombre: "Nombre",
    SiglaEsf: "",
    ValorEsfuerzo: "Valor del Esfuerzo",
    Unidadval: "",
    tipoEsfuerzo: "Tipo Esfuerzo",
    TipoResistencia: "Tipo Resistencia",
    SiglaTma: "",
    valTma: "Valor del Tma",
    SiglaRev: "",
    tmaFrac: "",
    valRev: "Valor Revenimiento",
    Unidad: "",
    TipoCons: "Tipo de Consistencia",
    modElast: "Modulo de Elasticidad",
    Acronimo: "",
    Edad: "Edad",
    absorcionCap: "Absorción Capilar",
    Acronimo2: "",
    trabaExtend: "Trabajo extendido",
    Clase: "Clase",
    Color: "Color",
    Comportamiento: "Comportamiento",
    conAire: "Condición de Aire",
    conIonClor: "Condición de Ion",
    tiempoPrueba: "Tiempo de prueba",
    tipoSistema: "Tipo de sistema",
  };

  // const datosBaseParaLaTabla = [
  //   "numMat",
  //   "descriLarga",
  //   "Comentarios",
  //   "palabrasCve",
  //   "desCorEng",
  //   "desLargEng",
  //   "fuenteInf",
  //   "fecRegInf",
  //   "codigoBimsa",
  //   "Nombre",
  //   "tipoEsfuerzo",
  //   "tmaFrac",
  //   "TipoCons",
  //   "modElast",
  //   "Acronimo",
  //   "Edad",
  //   "absorcionCap",
  //   "Acronimo2",
  //   "trabaExtend",
  //   "Clase",
  //   "Color",
  //   "Comportamiento",
  //   "conAire",
  //   "conIonClor",
  //   "tiempoPrueba",
  //   "tipoSistema",
  // ];

  const [busqueda, setBusqueda] = React.useState("");
  const [busqueda2, setBusqueda2] = React.useState("");

  const hangleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (datoo) => {
    const resultadoSinNull = listarConcretosMateriales.filter(
      (x) => x.descriCorta !== null
    );
    if (datoo.length === 0) {
      return setListarConcretosMaterialesCopia(listarConcretosMateriales);
    } else {
      var resultadoBusqueda = resultadoSinNull.filter((elemento) => {
        if (
          elemento.codigoOmc.toLowerCase().includes(datoo.toLowerCase()) ||
          elemento.descriCorta.toLowerCase().includes(datoo.toLowerCase())
        ) {
          return elemento;
        }
      });
      setListarConcretosMaterialesCopia(resultadoBusqueda);
    }
  };

  const hangleChange2 = (e) => {
    setBusqueda2(e.target.value);
    filtradoEspecial(e.target.value);
    console.log(e.target.value);
  };

  const filtradoEspecial = (terminoDeBusqueda) => {
    var resultadoBusqueda2 = listarConcretosMateriales.filter((elemento) => {
      if (
        elemento.valRev
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase()) ||
        elemento.valTma.toLowerCase().includes(terminoDeBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setListarConcretosMaterialesCopia(resultadoBusqueda2);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  return (
    <div className="container mt-5 pt-4">
      <h2 className="h1 text-center">LISTA DE MATERIALES/PRODUCTOS</h2>
      <br />
      <h2 className="h2 text-center my-2">Selecciona una clasificación</h2>
      <Clasificacion />
      {estructura && <Estructura />}
      <br />
      {/* <div className="row justify-content-between">
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Clase</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select
            name=""
            id=""
            onChange={hangleChange2}
            className="form-select"
          >
            <option value="">TMA</option>
            {listarTMA.map((value, index) => (
              <option key={index} value={value.valTma}>
                {value.valTma}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Valor del Esfuerzo</option>
            {listarValorEsfuerzo.map((valorEs, index) => (
              <option key={index} value={valorEs.idValEsf}>
                {valorEs.Valor}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Esfuerzo</option>
            {
              <option value={1}>
                Resistencia a la compresión del concreto
              </option>
            }
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Resistencia</option>
            {listarTipoResistencia.map((value, index) => (
              <option key={index} value={value.idTipoResist}>
                {value.Tipo}
              </option>
            ))}
          </select>
        </div>
      </div> */}
      <br />
      <div className="row">
        <div className="col-6 d-flex" role="search">
          <input
            className="form-control w-75"
            type="search"
            placeholder="Search"
            width={"80% !important"}
            aria-label="Search"
            onChange={hangleChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
        <div className="col-2"></div>
        <div className="col-4 d-flex align-items-end justify-content-end">
          <SwipeableTemporaryDrawer />
          <CSVLink
            data={listarConcretosMateriales}
            filename={"listarConcretosMateriales.txt"}
            className="h3 me-1 text-success"
          >
            <BootstrapTooltip title="Descargar archivo">
              <BiExport />
            </BootstrapTooltip>
          </CSVLink>
          <ModalMateriales className="justify-aling-end" />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr id="table-materials-title">
              {datoBaseTabla.map((title, index) => (
                <th className="" key={index}>
                  {datosGenerales[title]}
                </th>
              ))}
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {listarConcretosMaterialesCopia.map((material, index) => (
              <tr key={index} id="table-materials" className="seleccion">
                {datoBaseTabla.map((item, index) => (
                  <td key={index}>{material[`${item}`]}</td>
                ))}
                <td>
                  <RiFileEditFill className="trash" onClick={resetTabla} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Densidad</option>
            <option value="">Selecciona...</option>
            {listarDensidad.map((value, index) => (
              <option key={index} value={value.idDensidad}>
                {value.valDensidad}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de Densidad</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Tipo de consistencia</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Flujo de revenimiento</option>
            {listarFlujoRev.map((value, index) => (
              <option key={index} value={value.idFlujoRev}>
                {value.valFluRev}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select
            name=""
            id=""
            onChange={hangleChange2}
            className="form-select"
          >
            <option value="">Valor de revenimiento</option>
            {listarRevenimiento.map((value, index) => (
              <option key={index} value={value.valRev}>
                {value.valRev}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Fibra</option>
            {listarFibraConcre.map((value, index) => (
              <option key={index} value={value.idFibraCon}>
                {value.Fibras}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Relación agua cemento</option>
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Categoria de exposición</option>
            {listarClasExposicion.map((value, index) => (
              <option key={index} value={value.idClasExpo}>
                {value.Condicion}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-3 py-2">
          <select name="" id="" className="form-select">
            <option value="">Sistema de colocación</option>
            {listarSistColocacion.map((value, index) => (
              <option key={index} value={value.idSistColoc}>
                {value.tipoSistema}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* <table className="table" id="tableMaterials">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Código</th>
            <th scope="col">Descripción en Español</th>
            <th scope="col">Descripción en Ingles</th>
            <th className="text-center" scope="col">
              Acción
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr
              key={index}
              className="seleccion"
              id={item[`${datoBaseTabla[index]}`]}
            >
              {parametros.map((parametro, index) => (
                <td key={parametro} className="col">
                  {item[`${parametro}`]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <Test /> */}
    </div>
  );
}

export { ListaDeMateriales };
