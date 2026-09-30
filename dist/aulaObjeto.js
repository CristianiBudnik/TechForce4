import { Cliente } from "./model/Cliente.js";
const cliente = new Cliente(1, "Maria", "Rua A, 123", 25);
console.log(cliente.apresentar());
console.log(cliente);
