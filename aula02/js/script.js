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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function matchStatus(user, computer) {
  if (user === computer) {
    return "Empate";
  } else if (user === 1) {
    if (computer === 2) {
      return "Máquina venceu!";
    } else if (computer === 3) {
      return "Usuário venceu!";
    }
  } else if (user === 2) {
    if (computer === 1) {
      return "Usuário venceu!";
    } else if (computer === 3) {
      return "Computador venceu!";
    }
  } else if (user === 3) {
    if (computer === 1) {
      return "Computador venceu!";
    } else if (computer === 2) {
      return "Usuário venceu!";
    }
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
  const computer = getRandomInt(1, 4); // get a random number from 1 to 3

  const message = `Escolha do usuário: ${formatChoice(
    input
  )} \nEscolha da máquina: ${formatChoice(computer)} \nResultado: ${matchStatus(
    input,
    computer
  )}`;

  [1, 2, 3].includes(input)
    ? alert(message)
    : alert("Insira uma opção válida!");
};
