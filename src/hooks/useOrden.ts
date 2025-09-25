import { useState } from "react";
import type { Item, ItemOrden } from "../types";

export default function useOrden() {
  const [orden, setOrden] = useState<ItemOrden[]>([]);

  const [propina, setPropina] = useState(0);

  const agregarItem = (item: Item) => {
    const existeItem = orden.find((itemOrden) => itemOrden.id === item.id);

    if (existeItem) {
      const ordenActualizada = orden.map((itemOrden) =>
        itemOrden.id === item.id
          ? { ...itemOrden, quantity: itemOrden.quantity + 1 }
          : itemOrden
      );
      setOrden(ordenActualizada);
    } else {
      const nuevoItem = { ...item, quantity: 1 };
      setOrden([...orden, nuevoItem]);
    }
  };

  const eliminarItem = (id: Item["id"]) => {
    const ordenActualizada = orden.filter((item) => item.id !== id);
    setOrden(ordenActualizada);
  };

  const guardarOrden = () => {
    setOrden([]);
    setPropina(0);
  };

  return {
    orden,
    propina,
    setPropina,
    agregarItem,
    eliminarItem,
    guardarOrden,
  };
}
