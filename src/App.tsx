import Item from "./components/Item";
import ContenidoOrden from "./components/ContenidoOrden";
import ResumenOrden from "./components/ResumenOrden";
import { menuItems } from "./data/db";
import useOrden from "./hooks/useOrden";
import FormularioPorcentagePropina from "./components/FormularioPorcentagePropina";

function App() {
  const {
    orden,
    propina,
    setPropina,
    agregarItem,
    eliminarItem,
    guardarOrden,
  } = useOrden();
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
              <Item key={item.id} item={item} agregarItem={agregarItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {orden.length ? (
            <>
              <ContenidoOrden orden={orden} eliminarItem={eliminarItem} />
              <FormularioPorcentagePropina
                setPropina={setPropina}
                propina={propina}
              />
              <ResumenOrden
                orden={orden}
                propina={propina}
                guardarOrden={guardarOrden}
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
