import React from "react";
import { TableContext } from "../../context/Materiales/TableContext";

function ButtonClass() {
  const { omniclass41, omniclass23, omniClass } =
    React.useContext(TableContext);
  return (
    <div className="container text-center pt-3">
      <button
        onClick={omniclass23}
        disabled={omniClass === 41}
        className="btn btn-primary btn-lg"
      >
        Omnniclass 23
      </button>
      <button
        onClick={omniclass41}
        disabled={omniClass === 23}
        className="btn btn-primary btn-lg"
      >
        Omnniclass 41
      </button>
    </div>
  );
}

export { ButtonClass };
