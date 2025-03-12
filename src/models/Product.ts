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
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getPriceAfter: (price: number): Product[] => {
    return data.filter((item) => {
      if (item.price >= price) {
        return true;
      } else {
        return false;
      }
    });
  },
};
