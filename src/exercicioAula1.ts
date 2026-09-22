import PromptSync = require('prompt-sync');

const Prompt = PromptSync();

type Consumidor = {
    id: number | null;
    nome: string | null;
    idade: number | null;
    sexo: string | null;
};

const criarObjeto = (): Consumidor => ({
    id: null,
    nome: null,
    idade: null,
    sexo: null
});

const lerNumero = (mensagem: string): number => {
    const valor = Number(Prompt(mensagem));
    return Number.isNaN(valor) ? 0 : valor;
};

const preencherObjeto = (consumidor: Consumidor): Consumidor => {
    consumidor.id = lerNumero('Digite o id do consumidor:');
    consumidor.nome = Prompt('Digite o nome do consumidor:');
    consumidor.idade = lerNumero('Digite a idade do consumidor:');
    consumidor.sexo = Prompt('Digite o sexo do consumidor:');
    return consumidor;
};

const verificarMaiorIdade = (idade: number | null): boolean => idade !== null && idade >= 18;

const verificarMenorIdade = (idade: number | null): boolean => idade !== null && idade < 18;


const calcularMediaIdade = (idades: number[]): number => {
    if (idades.length === 0) return 0;
    return idades.reduce((soma, idade) => soma + idade, 0) / idades.length;
};


const apresentarResultado = (consumidores: Consumidor[]) => {
    const idades = consumidores
        .map(consumidor => consumidor.idade)
        .filter((idade): idade is number => idade !== null && idade > 0);

    const maioresDeIdade = consumidores.filter(consumidor => verificarMaiorIdade(consumidor.idade));
    const menoresDeIdade = consumidores.filter(consumidor => verificarMenorIdade(consumidor.idade));

    console.log(`Média de idade dos consumidores: ${calcularMediaIdade(idades)}`);
    console.log(`Quantidade de consumidores maiores de idade: ${maioresDeIdade.length}`);
    console.log(`Quantidade de consumidores menores de idade: ${menoresDeIdade.length}`);
};

apresentarResultado([
    preencherObjeto(criarObjeto()),
    preencherObjeto(criarObjeto()),
    preencherObjeto(criarObjeto())
]);
