function NivelRanque(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoDeVitoria = vitorias - derrotas;

    // Determina o nível com base no saldo de vitórias
    let nivel;

    if (saldoDeVitoria < 10) {
        nivel = "Ferro";
    } else if ( saldoDeVitoria <= 20) {
        nivel = "Bronze";
    } else if ( saldoDeVitoria <= 50) {
        nivel = "Prata";
    } else if ( saldoDeVitoria <= 80) {
        nivel = "Ouro";
    } else if ( saldoDeVitoria <= 90) {
        nivel = "Diamante";
    } else if (saldoDeVitoria <= 100) {
        nivel = "Lendário ";
    } else {
        nivel = "Imortal"
    }
    // Retorno a mensagem de saída
    return `O Herói tem um saldo de ${saldoDeVitoria} está no nível de ${nivel}!`;
}

let vitorias = 140;
let derrotas = 20;
const resultado = NivelRanque(vitorias, derrotas);
console.log(resultado);