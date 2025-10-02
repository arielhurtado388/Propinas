import type { Dispatch } from "react";
import { formatearMoneda } from "../helpers";
import type { OrdenAcciones } from "../reducers/orden-reducer";
import type { Item, ItemOrden } from "../types";

type ContenidoOrdenProps = {
  orden: ItemOrden[];
  dispatch: Dispatch<OrdenAcciones>;
};

export default function ContenidoOrden({
  orden,
  dispatch,
}: ContenidoOrdenProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {orden.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatearMoneda(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatearMoneda(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer"
              onClick={() =>
                dispatch({ type: "eliminar-item", payload: { id: item.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
