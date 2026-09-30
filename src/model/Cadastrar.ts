import type { Cliente } from "./Cliente.js";
import type { Endereco } from "./Endereco.js";

export class Cadastrar {
    constructor(
        public id: number, 
        public cliente: Cliente, 
        public servico: string, 
        public endereco: Endereco
    ) {} }