export class Cliente {
    constructor(public id: number, public nome: string, public endereco: string, public idade: number) {

    }

    apresentar = ():string => {
        return "Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.";
    }
}