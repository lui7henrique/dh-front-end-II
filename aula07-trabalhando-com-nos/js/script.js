let index = 0;

const handleCreateTask = () => {
  console.log("criando elemento porra");

  const element = document.createElement("div");
  element.setAttribute("class", "task");
  element.setAttribute("id", index);

  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  element.appendChild(checkbox);
  element.appendChild(container);

  const p = document.createElement("p");
  p.innerText = `Tarefa ${index}`;

  const sub = document.createElement("sub");
  sub.setAttribute("onclick", `handleDeleteTask(${index})`);
  sub.innerText = "Excluir";

  container.appendChild(p);
  container.appendChild(sub);

  const main = document.querySelector("main");
  main.appendChild(element);
  index++;
};

const handleDeleteTask = (id) => {
  const element = document.getElementById(`${id}`);
  console.log(element);
  element.remove();
  index = index - 1;
};
