// Deve conter ao menos duas palavras.
// Cada nome deve ter mais de uma letra.
// O campo não pode ter mais de 150 caracteres.
// O campo não pode ser vazio.
// Não pode ter números.

const allCheckboxes = Array.from(document.getElementsByName("hobbies"));

const cantBeSelectTogether = {
  "video-game": ["cozinha"],
  cozinha: ["video-game"],

  guitarra: ["leitura"],
  leitura: ["guitarra"],

  netflix: ["corte", "costura"],
  corte: ["netflix"],
  costura: ["netflix"],
};

const verifyCheckboxes = () => {
  const checked = allCheckboxes.filter((each) => each.checked);
  const notChecked = allCheckboxes.filter((each) => !each.checked);

  checked.length >= 4
    ? notChecked.map((each) => (each.disabled = true))
    : notChecked.map((each) => (each.disabled = false));

  checked.map((item) =>
    cantBeSelectTogether[item.id].map((item) => {
      const mustBeDisabled = allCheckboxes.filter((each) => each.id === item);

      mustBeDisabled.length >= 1 &&
        mustBeDisabled.map((each) => (each.disabled = true));
    })
  );
};

const handleSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim().split(" ");

  if (name.length < 2) {
    alert("Nome deve conter ao menos duas palavras.");
    return;
  } else {
    const isValid = name.map((each) => verifyName(each)).every((each) => each);

    if (!isValid) {
      alert("Nome deve conter ao menos duas letras.");
      return;
    }

    const allCheckboxes = Array.from(document.getElementsByName("hobbies"));
    if (!allCheckboxes.some((each) => each.checked)) {
      alert("Selecione ao menos um hobby");
      return;
    }

    alert("Cadastro realizado com sucesso!");
    const form = document.querySelector("form");
    form.reset();
    return;
  }
};

const verifyName = (name) => {
  const regex = /^[a-zA-Z]{2,150}$/;
  return regex.test(name);
};

// Se deve selecionar no máximo 4 hobbies.
// Hobbies que não podem ser selecionados ao mesmo tempo:
// Video game com cozinha.
// Guitarra com leitura.
// Netflix com corte e costura.
