import type { Item, ItemOrden } from "../types";

export type OrdenAcciones =
  | {
      type: "agregar-item";
      payload: { item: ItemOrden };
    }
  | { type: "eliminar-item"; payload: { id: Item["id"] } }
  | { type: "guardar-orden" }
  | { type: "agregar-propina"; payload: { value: number } };

export type OrdenEstado = {
  orden: ItemOrden[];
  propina: number;
};

export const estadoInicial = {
  orden: [],
  propina: 0,
};

export const ordenReducer = (
  state: OrdenEstado = estadoInicial,
  action: OrdenAcciones
) => {
  if (action.type === "agregar-item") {
    const existeItem = state.orden.find(
      (itemOrden) => itemOrden.id === action.payload.item.id
    );

    let orden: ItemOrden[] = [];

    if (existeItem) {
      orden = state.orden.map((itemOrden) =>
        itemOrden.id === action.payload.item.id
          ? { ...itemOrden, quantity: itemOrden.quantity + 1 }
          : itemOrden
      );
    } else {
      const nuevoItem: ItemOrden = { ...action.payload.item, quantity: 1 };
      orden = [...state.orden, nuevoItem];
    }
    return {
      ...state,
      orden,
    };
  }

  if (action.type === "eliminar-item") {
    return {
      ...state,
      orden: state.orden.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === "guardar-orden") {
    return {
      ...state,
      orden: [],
      propina: 0,
    };
  }

  if (action.type === "agregar-propina") {
    const propina = action.payload.value;
    return {
      ...state,
      propina,
    };
  }

  return state;
};
