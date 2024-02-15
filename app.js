const playerSelection = "papel";
const computerSelection = getcomputerChoice();


function inicioGame(eleccionjugador = "", eleccionmaquina) {
  let ej = eleccionjugador.toLowerCase();
  console.log(eleccionjugador, eleccionmaquina)
  
  if (ej === eleccionmaquina) return "empate";
  else if (
    (ej === "piedra" && eleccionmaquina === "tijera") ||
    (ej === "papel" && eleccionmaquina === "piedra") ||
    (ej === "tijera" && eleccionmaquina === "papel")
  )
    return "ganaste";
  else {
    return "perdiste";
  }

}

function getcomputerChoice() {
    let numeroAleatorio = Math.floor(Math.random() * 3);
  switch (numeroAleatorio) {
    case 0:
      return "piedra";
    case 1:
      return "papel";
    case 2:
      return "tijera";
  }
}


function playgame(){
    let pp =0
    let pc = 0

    for ( let i = 0; i < 5; i ++){
        let seleccionjg = prompt('seleccione una opcion: piedra, papel o tijera')
        let mesanje = inicioGame(seleccionjg, getcomputerChoice())
        if (mesanje == 'ganaste')
            pp = pp + 1
        else if (mesanje == 'perdiste')
            pc = pc + 1
        console.log(`jugador tu ${mesanje} || player ${pp} / computador ${pc}` )  
    }

    if (pp > pc)
        console.log('has ganado la partida')
    else if (pp == pc)
        console.log('partida empatada')
    else
        console.log('has perdido la partida')
}

playgame()