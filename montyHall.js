const fs = require('fs')
const readlineSync = require('readline-sync')
const { randomInt } = require('crypto')
//const { platform } = require('os')


let runGame = true
while (runGame) {

  const trophy = 'Porsche Taycan Turbo S'
  const portes = ['Chèvre blanche', 'Chèvre marron', 'Chèvre tachetée']

  let fstChoice = 4
  let changeChoice = false
  let GoatDem = 0
  let lstGates = 0
  let lstChoice = 0
  let Gates = portes

  const index = randomInt(0, 3) // un nombre aléatoire entre 0 et 2

  Gates[index] = trophy

  let indexPlayer = 0


  console.log(Gates)
  const choicePlayer = readlineSync.keyIn(`Trois portes s'offre à vous. Laquelle choisissez-vous (1, 2 ou 3 - 0 pour sortir du jeux) ? : `, { limit: ['$<1-3>', '0'] });
  indexPlayer = choicePlayer - 1
  console.log(`index 1er choix joueur ${indexPlayer}`)
  if (choicePlayer === '0') {
    console.log('GAME OVER')
    process.exit(1)
  }


  for (let i = 0; i < Gates.length; i++) {
    if (i !== indexPlayer && i !== index) {
      console.log(`Je vous dévoile la porte ${i + 1}\n et voici ce qu'il y a derrière : une ${Gates[i]}`)
      GoatDem = i
      break
    }
  }
  //console.log(`porte chevre dévoiler ${GoatDem}`)

  for (let i = 0; i < Gates.length; i++) {
    if (i !== indexPlayer && i !== GoatDem) {
      lstGates = i
    }
  }

  //console.log(`derniere porte pas devoiler ${lstGates}`)

  if (readlineSync.keyInYN('Voulez-vous changer de porte ?')) {
    fstChoice = indexPlayer
    lstChoice = lstGates
    changeChoice = true
    console.log(`Votre choix de la porte ${lstChoice} est vérouiller. Voici ce qui se cache derrière la porte.`)
  } else {
    console.log(`Bien, votre choix sur la porte ${indexPlayer + 1} est vérouiller. Voici ce qui se cache derrière la porte.`)
  }

  //console.log(`index 1er choix joueur ${indexPlayer}`)
  //console.log(`index 2eme choix joueur ${lstChoice}`)

  if (changeChoice === false) {
    if (indexPlayer === index) {
      console.log(`Vous avez gagner une superbe ${trophy} toutes options, d'une valeur de 181 152€. Félicitation !`)
    } else {
      console.log(`MHEEEEEEE !!!!\nOh, quelle dommage ! Une chèvre !`)
      console.log(`Vous avez perdu, malheureusement.\n La ${trophy} étais derrière la porte ${index + 1}.`)
      console.log(`Mais vous ne repartez pas les mains vide, voici votre lot de consolation.`)
      console.log()
    }
  } else if (lstChoice === index) {
    console.log(`Vous avez gagner une superbe ${trophy} toutes options, d'une valeur de 181 152€. Félicitation !`)
  } else {
    console.log(`MHEEEEEEE !!!!\nOh, quelle dommage ! Une chèvre !`)
    console.log(`Vous avez perdu, malheureusement.\nVoyons voir si vous devez avoir des regrets ou pas.`)
    console.log(`Voici ce qu'il y avais derrière la porte de votre choix précédent.`)
    if (fstChoice === index) {
      console.log(`Derrière la porte ${fstChoice + 1} de votre précédent choix il y avais....`)
      console.log(`Aie !!!! Une superbe ${trophy} toutes options, d'une valeur de 181 152€.`)
      console.log(`Ha c'est triste, Mais vous ne repartez pas les mains vide, voici votre lot de consolation.`)
      console.log()
    } else {
      console.log(`Derrière la porte ${fstChoice + 1} de votre précédent choix il y avais....`)
      console.log(`MHEEEEEEEE !!!! Une autre chèvre, l'honneur est sauf.`)
      console.log(`Mais vous ne repartez pas les mains vide, voici votre lot de consolation.`)
      console.log()
    }
  }
  if (readlineSync.keyInYN('Voulez-vous rejouer ?')) {

  } else {
    console.log('FIN DE PARTIE')
    runGame = false
  }
}
