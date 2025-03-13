import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let list = Product.getAll();
  let expansiveList = Product.getPriceAfter(25);
  let user = {
    title: "Peaky Blinders Sangue Apostas e Navalhas",
    src: "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_.jpg",
    id: 1,
    showWelcome: true,
  };
  let age: number = 10;
  let oldAge: boolean = false;

  if (age > 50) {
    oldAge = true;
  }

  let Felipe = {
    name: "Felipe",
    showName: true,
  };
  res.render("pages/home", {
    user,
    Felipe,
    oldAge,
    products: list,
    expensive: expansiveList,
    frasesDoDia: ["ola", "oi"],
  });
};
