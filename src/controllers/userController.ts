import { Request, Response } from "express";

export const name = (req: Request, res: Response) => {
  // console.log("Query String:", req.query);
  let name: string = req.query.name as string;
  res.render("pages/name", {
    name,
  });
};

export const age = (req: Request, res: Response) => {
  res.render("pages/idade", {});
};

export const ageResult = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false; //mostra uma condicional que por padrao é falsa
  let idade: number = 0; //mostra a idade que por padrao é zero
  if (req.body.ano) {
    // aqui a gente verifica se recebeu a informacao do frontend via get
    let ano: number = parseInt(req.body.ano as string); //armazena a informacao via querystring e transfomamos ela em numero inteiro
    let anoAtual: number = new Date().getFullYear(); // funcao nativa do js para verificar a data
    idade = anoAtual - ano; //modifica a variavel idade com o valor novo
    mostrarIdade = true; //muda a variavel mostrar idade para true e isso mostra no front
  }
  res.render("pages/idade", {
    idade, //nossas variaveis esta passando para o frontend por aqui.
    mostrarIdade,
  });
};
