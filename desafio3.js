// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo = "Ken") {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'hadouken';
        }

        console.log(`O ${this.tipo} atacou com ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
const heroi2 = new Heroi('Gandalf', 1000, 'mago');
const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
const heroi4 = new Heroi('Hattori Hanzo', 25, 'ninja');
const heroi5 = new Heroi("SemNome", 25)

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
heroi5.atacar();