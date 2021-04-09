const fs = require('fs')
const readlineSync = require('readline-sync')
const { randomInt } = require('crypto')
const chalk = require('chalk')


if (process.argv.length > 2) {
  console.log(chalk.red(`Usage : node montyHall.js`))
  process.exit(1)
}

if (!fs.existsSync('log.txt')) {
  console.log(chalk.red('Error: log.txt not exist.'))
  console.log(chalk.yellow('Making à new file'))
  fs.closeSync(fs.openSync(`./log.txt`, 'w'))
}

let runGame = true

while (runGame) {

  const trophy = 'Porsche Taycan Turbo S'
  const portes = ['Chèvre blanche', 'Chèvre marron', 'Chèvre tachetée']

  let Gates = portes
  let fstChoice = 0
  let changeChoice = false
  let GoatDem = 0
  let lstGates = 0
  let lstChoice = 0

  let indexPlayer = 0
  const index = randomInt(0, 3) // un nombre aléatoire entre 0 et 2
  Gates[index] = trophy

  const lotCons = ['service de table en inox', 'une chaise en osier', 'une paire de rideaux occultant', 'une maquette de Porche GT3-RS', 'un puzzle de la tour Eiffel de 3000 pièces', 'une photo dédicacée de moi même']
  const indLotCons = randomInt(0, lotCons.length)
  const randLotCons = lotCons[indLotCons]





  console.log(Gates)
  const choicePlayer = readlineSync.keyIn(`Trois portes s'offre à vous. Laquelle choisissez-vous (1, 2 ou 3 - 0 pour sortir du jeux) ? : `, { limit: ['$<1-3>', '0'] });
  indexPlayer = choicePlayer - 1

  if (choicePlayer === '0') {
    console.log(chalk.green('End of program'))
    process.exit(1)
  }


  for (let i = 0; i < Gates.length; i++) {
    if (i !== indexPlayer && i !== index) {
      console.log(`Je vous dévoile la porte ${chalk.cyanBright(i + 1)}\n et voici ce qu'il y a derrière : une ${chalk.yellowBright(Gates[i])}`)
      GoatDem = i
      break
    }
  }

  for (let i = 0; i < Gates.length; i++) {
    if (i !== indexPlayer && i !== GoatDem) {
      lstGates = i
    }
  }

  if (readlineSync.keyInYN('Voulez-vous changer de porte ?')) {
    fstChoice = indexPlayer
    lstChoice = lstGates
    changeChoice = true
    console.log(`Votre choix de la porte ${chalk.cyanBright(lstChoice)} est vérouiller. Voici ce qui se cache derrière la porte.`)
  } else {
    console.log(`Bien, votre choix sur la porte ${chalk.cyanBright(indexPlayer + 1)} est vérouiller. Voici ce qui se cache derrière la porte.`)
  }

  if (changeChoice === false) {
    if (indexPlayer === index) {
      console.log(chalk.greenBright.bold(`Vous avez gagner une superbe ${trophy} toutes options, d'une valeur de 181 152€. Félicitation !`))
    } else {
      console.log(chalk.yellowBright.bold('MHEEEEEEE !!!!'))
      console.log(chalk.magentaBright(`Oh, quelle dommage ! Une chèvre !`))
      console.log(chalk.magentaBright(`Vous avez perdu, malheureusement.\n La ${chalk.greenBright(trophy)} étais évidement, derrière la porte ${chalk.cyanBright(index + 1)}.`))
      console.log(chalk.magentaBright(`Mais vous ne repartez pas les mains vide, voici votre lot de consolation.`))
      console.log(chalk.blueBright(`${randLotCons}.\nMerci de votre participation et au revoir`))
    }
  } else if (lstChoice === index) {
    console.log(chalk.greenBright.bold(`Vous avez gagner une superbe ${trophy} toutes options, d'une valeur de 181 152€. Félicitation !`))
  } else {
    console.log(chalk.yellowBright.bold('MHEEEEEEE !!!!'))
    console.log(chalk.magentaBright(`Oh, quelle dommage ! Une chèvre !`))
    console.log(chalk.magentaBright(`Vous avez perdu, malheureusement.\n La ${chalk.greenBright(trophy)} toutes options, d'une valeur de 181 152€, étais évidement, derrière la porte ${chalk.cyanBright(index + 1)}, qui correspond à votre premier choix.`))
    console.log(chalk.magentaBright(`Qu'elle dommage ! Mais vous ne repartez pas les mains vide, voici votre lot de consolation.`))
    console.log(chalk.blueBright(`${randLotCons}.\nMerci de votre participation et au revoir`))
  }

  if (readlineSync.keyInYN('Voulez-vous rejouer ?')) {

  } else {
    console.log(chalk.greenBright('Au revoir et à bientôt peut-être.\nFIN DU PROGRAMME'))
    runGame = false
  }
}
