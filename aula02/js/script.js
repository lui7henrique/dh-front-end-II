const handleRegisterMusicians = () => {
  const input = prompt("Quantos músicos deseja cadastrar?");
  let cont = 0;
  let musicians = [];

  while (cont < input) {
    const musician = prompt(`Insira o nome do músico ${cont + 1}:`);
    musicians.push(musician);
    cont++;
  }

  if (musicians.length !== 0) {
    musicians.map((musician) => {
      console.log(musician);
    });
  }
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const weapons = {
  1: { weakTo: 2, strongTo: 3 },
  2: { weakTo: 3, strongTo: 1 },
  3: { weakTo: 1, strongTo: 2 },
};

function matchStatus(user, computer) {
  if (user === computer) {
    return "Empate";
  } else if (weapons[user].strongTo === computer) {
    // I won
    return "Usuário venceu";
  } else if (weapons[user].weakTo === computer) {
    // I Lost
    return "Máquina venceu";
  }
}

const formatChoice = (choice) => {
  switch (choice) {
    case 1:
      return "Pedra";
    case 2:
      return "Papel";
    case 3:
      return "Tesoura";
    default:
      return "Undefined";
  }
};

const handlePlayRockPaperAndScissors = () => {
  const input = +prompt(
    "Digite o número de sua escolha: Pedra(1), Papel(2) ou Tesoura(3)"
  );
  const computer = getRandomInt(1, 3); // get a random number from 1 to 3

  if ([1, 2, 3].includes(input)) {
    const message = `Escolha do usuário: ${formatChoice(
      input
    )} \nEscolha da máquina: ${formatChoice(
      computer
    )} \nResultado: ${matchStatus(input, computer)}`;

    alert(message);
  } else {
    alert("Insira uma opção válida!");
  }
};
