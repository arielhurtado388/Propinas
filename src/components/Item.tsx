import type { Dispatch } from "react";
import type { OrdenAcciones } from "../reducers/orden-reducer";
import type { Item, ItemOrden } from "../types";

type ItemProps = {
  item: ItemOrden;
  dispatch: Dispatch<OrdenAcciones>;
};
export default function Item({ item, dispatch }: ItemProps) {
  return (
    <button
      className="border-2 border-amber-400 w-full p-3 flex justify-between cursor-pointer hover:bg-amber-200"
      onClick={() => dispatch({ type: "agregar-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
