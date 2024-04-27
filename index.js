let result = saldoRank(100, 12)
console.log(`O Herói tem saldo de ${result.saldo} está no nível de ${result.nivelHeroi}`);

function saldoRank (partwin, partLose){
    let saldo = partwin - partLose
    let nivelHeroi;

    if (saldo<10){
        nivelHeroi = "ferro"
    }else if ( saldo > 10 && saldo < 21){
        nivelHeroi = "bronze"
    }else if ( saldo > 20 && saldo < 51){
        nivelHeroi = "prata"
    }else if ( saldo > 50 && saldo < 81){
        nivelHeroi = "ouro"
    }else if ( saldo > 80 && saldo < 91){
        nivelHeroi = "diamante"
    }else if ( saldo > 90 && saldo < 101){
        nivelHeroi = "lendario"
    }else{
        nivelHeroi = "imortal"
    }
   return{saldo, nivelHeroi}
}








