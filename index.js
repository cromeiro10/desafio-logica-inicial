let superHeroi =  "Zeus"
let pontuacaoXp = 20000


let nivelDoHeroi = ""


if (pontuacaoXp <= 1000) {
	
	nivelDoHeroi = "Ferro";

} else if ( pontuacaoXp >= 1001 && pontuacaoXp <= 2000 ){

	nivelDoHeroi = "Bronze";

} else if ( pontuacaoXp >= 2001 && pontuacaoXp <= 5000 ){

	nivelDoHeroi = "Prata";

} else if ( pontuacaoXp >= 5001 && pontuacaoXp <= 7000 ){

	nivelDoHeroi = "Ouro";

} else if ( pontuacaoXp >= 7001 && pontuacaoXp <= 8000 ){

	nivelDoHeroi = "Platina";

} else if ( pontuacaoXp >= 8001 && pontuacaoXp <= 9000 ){

	nivelDoHeroi = "Ascendente";

} else if ( pontuacaoXp >= 9001 && pontuacaoXp <= 10000 ){

	nivelDoHeroi = "Imortal";

} else {

	nivelDoHeroi = "Radiante";

}

console.log( "O Herói de nome " + superHeroi + " esta no nivel " + nivelDoHeroi )

 




