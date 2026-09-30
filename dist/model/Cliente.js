export class Cliente {
    id;
    nome;
    endereco;
    idade;
    constructor(id, nome, endereco, idade) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.idade = idade;
    }
    apresentar = () => {
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    };
}
