import React from "react";
import { Link } from "react-router-dom";
import { TableContext } from "../../context/Materiales/TableContext";
import { AiFillSetting } from "react-icons/ai";

function SwipeableTemporaryDrawer() {
  const {
    listarTMA,
    listarValorEsfuerzo,
    listarTipoResistencia,
    listarConcretosMateriales,
    setListarConcretosMaterialesCopia,
  } = React.useContext(TableContext);

  const [busqueda2, setBusqueda2] = React.useState("");

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

  return (
    <div>
      <AiFillSetting
        class="h3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Toggle right offcanvas
      </AiFillSetting>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        {/* Aqui va la info de informacion dentro del offcanvas */}
        <div class="offcanvas-body">
          <ul className="" aria-labelledby="dropdownMenuLink">
            <li>
              <Link className="dropdown-item" to>
                <div className="">
                  <select name="" id="" className="form-select">
                    <option value="">Clase</option>
                  </select>
                </div>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to>
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
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to>
                <select name="" id="" className="form-select">
                  <option value="">Valor del Esfuerzo</option>
                  {listarValorEsfuerzo.map((valorEs, index) => (
                    <option key={index} value={valorEs.idValEsf}>
                      {valorEs.Valor}
                    </option>
                  ))}
                </select>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to>
                <select name="" id="" className="form-select">
                  <option value="">Tipo de Esfuerzo</option>
                  {
                    <option value={1}>
                      Resistencia a la compresión del concreto
                    </option>
                  }
                </select>
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to>
                <select name="" id="" className="form-select">
                  <option value="">Tipo de Resistencia</option>
                  {listarTipoResistencia.map((value, index) => (
                    <option key={index} value={value.idTipoResist}>
                      {value.Tipo}
                    </option>
                  ))}
                </select>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { SwipeableTemporaryDrawer };
