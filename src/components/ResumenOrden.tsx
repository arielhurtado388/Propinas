import { useMemo } from "react";
import type { ItemOrden } from "../types";
import { formatearMoneda } from "../helpers";

type ResumenOrdenProps = {
  orden: ItemOrden[];
  propina: number;
  guardarOrden: () => void;
};
export default function ResumenOrden({
  orden,
  propina,
  guardarOrden,
}: ResumenOrdenProps) {
  const montoSubtotal = useMemo(
    () => orden.reduce((total, item) => total + item.quantity * item.price, 0),
    [orden]
  );

  const montoPropina = useMemo(() => montoSubtotal * propina, [propina, orden]);

  const total = useMemo(() => montoSubtotal + montoPropina, [propina, orden]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales - Propinas</h2>

        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatearMoneda(montoSubtotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatearMoneda(montoPropina)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatearMoneda(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 cursor-pointer"
        disabled={total === 0 ? true : false}
        onClick={guardarOrden}
      >
        Guardar Orden
      </button>
    </>
  );
}
