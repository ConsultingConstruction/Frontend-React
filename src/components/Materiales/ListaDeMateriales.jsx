import React from "react";
import { TableContext } from "../../context/Materiales/TableContext";
import { RiFileEditFill } from "react-icons/ri";
import { BiExport } from "react-icons/bi";
import { Estructura } from "./Estructura";
import "./TableApi.css";
import { ModalMateriales } from "./ModalMateriales";
import { CSVLink } from "react-csv";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
  } = React.useContext(TableContext);

  const [estructura, setEstructura] = React.useState(false);

  const datosGenerales = {
    numMat: "numMat",
    CodigoOmc23: "Código",
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

  return (
    <div className="container vh-100">
      <h2 className="h1 text-center">LISTA DE MATERIALES/PRODUCTOS</h2>
      <br />
      <h2 className="h2">Selecciona una clasificación</h2>
      <div className="row text-center">
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Acondicionamiento del terreno
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Cimientos</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span
            className="btn btn-sm btn-dark fw-bold"
            onClick={() => setEstructura(!estructura)}
          >
            Estructuras
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Fachadas y muros divisorios
          </span>
        </div>
      </div>
      <div className="row text-center">
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Remates y ayudas</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Firmes y pavimentos urbanos
          </span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">Instalaciones</span>
        </div>
        <div className="d-grid col-12 col-md-3 py-2">
          <span className="btn btn-sm btn-dark fw-bold">
            Equipamiento urbano
          </span>
        </div>
      </div>
      {estructura && <Estructura />}
      <br />
      <div className="row justify-content-between">
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">Clase</option>
          </select>
        </div>
        <div className="col-12 col-md-2 py-2">
          <select name="" id="" className="form-select">
            <option value="">TMA</option>
            {listarTMA.map((value, index) => (
              <option key={index} value={value.idTma}>
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
      </div>
      <br />
      <div style={{ textAlign: "end" }}>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip id="tooltip-disabled">Exportar a CSV</Tooltip>}
        >
          <CSVLink
            data={listarConcretosMateriales}
            filename={"listarConcretosMateriales.xls"}
            className="h3 me-1 text-success"
          >
            <BiExport />
          </CSVLink>
        </OverlayTrigger>
        <ModalMateriales className="justify-aling-end" />
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
            {listarConcretosMateriales.map((material, index) => (
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
          <select name="" id="" className="form-select">
            <option value="">Valor de revenimiento</option>
            {listarRevenimiento.map((value, index) => (
              <option key={index} value={value.idReven}>
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
    </div>
  );
}

export { ListaDeMateriales };
