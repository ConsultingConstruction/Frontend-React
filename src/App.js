import React from "react";

//redux
import { Omc23Provider } from "./context/omc23/ContextOmc23";
import { Provider } from "react-redux";
import store from './redux'
import './styles/omc23/styles.css'
import './styles/modalsStyle.css'
import './styles/buttons.css'
import { Rutas } from "./Routes/Rutas";
import { TableProvider } from "./context/Materiales/TableContext";
import { Container } from "./components/Materiales/Container";


function App() {
  return (
    <div className="" >
      <Provider store={store}>
        <Omc23Provider>
          <TableProvider>
            <Rutas />

          </TableProvider>
        </Omc23Provider>
      </Provider>
    </div>
  );
}

export default App;
