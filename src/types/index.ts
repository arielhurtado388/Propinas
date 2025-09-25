export type Item = {
  id: number;
  name: string;
  price: number;
};

export type ItemOrden = Item & {
  quantity: number;
};
