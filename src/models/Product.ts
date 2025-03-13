type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  {
    title: "ProdutoX",
    price: 10,
  },
  {
    title: "ProdutoY",
    price: 20,
  },
  {
    title: "ProdutoZ",
    price: 30,
  },
  {
    title: "iPhone",
    price: 1000,
  },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getPriceAfter: (price: number): Product[] => {
    return data.filter((item) => item.price >= price);
  },
};
