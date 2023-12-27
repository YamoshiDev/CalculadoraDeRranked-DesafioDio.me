function balanceRanked(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    let level;
    if (saldoVitorias < 10) {
        level = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        level = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        level = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        level = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        level = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        level = "Lenda";
    } else if (saldoVitorias >= 101) {
        level = "Imortal";
    }

    return [saldoVitorias, level];
}

function main() {
    let vitorias = parseInt(prompt("Digite o número de vitórias: "));
    let derrotas = parseInt(prompt("Digite o número de derrotas: "));

    let [saldoVitorias, level] = balanceRanked(vitorias, derrotas);

    alert("O Hero tem um saldo de " + saldoVitorias + " e está no nível de " + level);
}

main();