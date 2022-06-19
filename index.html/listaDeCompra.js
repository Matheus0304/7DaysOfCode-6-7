let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";



let adicionarMais = "sim";
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (adicionarMais === "não"){
        break;
    }
    	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'laticínios'){
        laticinios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}

let removerItem = prompt("Você deseja remover uma comida na lista de compras? Responda 'sim' ou 'não'.");

while(removerItem != "sim" && removerItem != "não"){
    alert(`Digite uma resposta válida`);
    removerItem = prompt("Você deseja remover uma comida na lista de compras? Responda 'sim' ou 'não'.")
}
if(removerItem === "sim"){
    removerItem = prompt("Qual categoria você gostaria de remover?");
    comida = prompt("Qual comida você gostaria de remover?");
    if(removerItem === 'frutas'){
        frutas.splice( frutas.indexOf(comida),1);
    } else if (removerItem === 'laticínios'){
        laticinios.splice(laticinios.indexOf(comida),1);
    } else if (removerItem === 'doces'){
        doces.splice( doces.indexOf(comida),1);
    } else if (removerItem === 'congelados'){
        congelados.splice( congelados.indexOf(comida),1);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
