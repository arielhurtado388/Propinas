import Item from "./components/Item";
import ContenidoOrden from "./components/ContenidoOrden";
import ResumenOrden from "./components/ResumenOrden";
import { menuItems } from "./data/db";
import FormularioPorcentagePropina from "./components/FormularioPorcentagePropina";
import { useReducer } from "react";
import { estadoInicial, ordenReducer } from "./reducers/orden-reducer";

function App() {
  const [state, dispatch] = useReducer(ordenReducer, estadoInicial);
  return (
    <>
      <header className="bg-amber-400 py-5">
        <h1 className="text-center text-3xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <Item
                key={item.id}
                item={{ ...item, quantity: 1 }}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.orden.length ? (
            <>
              <ContenidoOrden orden={state.orden} dispatch={dispatch} />
              <FormularioPorcentagePropina
                dispatch={dispatch}
                propina={state.propina}
              />
              <ResumenOrden
                orden={state.orden}
                propina={state.propina}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
