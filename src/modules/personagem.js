export class Personagem {
    nome
    vida = 100
    mana = 100
    level
    tipo
    descricao

    constructor(nome, level) {
        this.nome = nome;
        this.level = level;
    }

    obterInsignia() {
        if(this.level >= 5) {
            return `Implacável ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    verificarVencedor(personagem1, personagem2) {
        if(personagem1.level === personagem2.level) {
            return `Empate!`
        }
        if(personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.constructor.nome} é o vencedor.`
        }
    }
}