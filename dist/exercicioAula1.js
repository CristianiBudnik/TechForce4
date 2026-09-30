import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const PromptSync = __require("prompt-sync");
const Prompt = PromptSync();
const criarObjeto = () => ({
    id: null,
    nome: null,
    idade: null,
    sexo: null
});
const lerNumero = (mensagem) => {
    const valor = Number(Prompt(mensagem));
    return Number.isNaN(valor) ? 0 : valor;
};
const preencherObjeto = (consumidor) => {
    consumidor.id = lerNumero('Digite o id do consumidor:');
    consumidor.nome = Prompt('Digite o nome do consumidor:');
    consumidor.idade = lerNumero('Digite a idade do consumidor:');
    consumidor.sexo = Prompt('Digite o sexo do consumidor:');
    return consumidor;
};
const verificarMaiorIdade = (idade) => idade !== null && idade >= 18;
const verificarMenorIdade = (idade) => idade !== null && idade < 18;
const calcularMediaIdade = (idades) => {
    if (idades.length === 0)
        return 0;
    return idades.reduce((soma, idade) => soma + idade, 0) / idades.length;
};
const apresentarResultado = (consumidores) => {
    const idades = consumidores
        .map(consumidor => consumidor.idade)
        .filter((idade) => idade !== null && idade > 0);
    const maioresDeIdade = consumidores.filter(consumidor => verificarMaiorIdade(consumidor.idade));
    const menoresDeIdade = consumidores.filter(consumidor => verificarMenorIdade(consumidor.idade));
    console.log(`Média de idade dos consumidores: ${calcularMediaIdade(idades)}`);
    console.log(`Quantidade de consumidores maiores de idade: ${maioresDeIdade.length}`);
    console.log(`Quantidade de consumidores menores de idade: ${menoresDeIdade.length}`);
};
const cadastrar = (quantidade) => {
    const listaConsumidores = [];
    for (let i = 0; i < quantidade; i++) {
        console.log("Cadastrar do Consumidor: " + (i + 1));
        listaConsumidores.push(preencherObjeto(criarObjeto()));
    }
    return listaConsumidores;
};
const consumidores = cadastrar(5);
apresentarResultado(consumidores);
