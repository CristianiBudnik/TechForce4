export class Cadastrar {
    id;
    cliente;
    servico;
    endereco;
    constructor(id, cliente, servico, endereco) {
        this.id = id;
        this.cliente = cliente;
        this.servico = servico;
        this.endereco = endereco;
    }
}
