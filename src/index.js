import { Personagem } from "./modules/personagem.js";

const personagemPedrinho = new Personagem('Pedrinho', 7, 12, 5, 'Mago', '');

const personagemJose = new Personagem('Jose', 7, 6, 3, 'Arqueiro', '');

console.log('Insígnia de ' + personagemPedrinho.nome + ': ' + personagemPedrinho.obterInsignia())

console.log('Insígnia de ' + personagemJose.nome + ': ' + personagemJose.obterInsignia())