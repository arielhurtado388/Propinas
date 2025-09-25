import type { Item } from "../types";

type ItemProps = {
  item: Item;
  agregarItem: (Item: Item) => void;
};
export default function Item({ item, agregarItem }: ItemProps) {
  return (
    <button
      className="border-2 border-amber-400 w-full p-3 flex justify-between cursor-pointer hover:bg-amber-200"
      onClick={() => agregarItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
