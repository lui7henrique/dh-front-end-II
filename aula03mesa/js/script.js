const body = document.querySelector("body");

const handleSelectFirstElement = () => {
  const conteudo = body.querySelector(".conteudo");
  const ul = conteudo.querySelector("ul");
  const li = ul.querySelectorAll("li");
  const liArrays = Array.from(li);

  const element = liArrays.filter(
    (li) => li.innerText === "Consegue obter esse elemento?"
  )[0];

  console.log(element);
};

const handleSelectSecondElement = () => {
  const conteudo = body.querySelector(".conteudo");
  const ul = conteudo.querySelector("ul");
  const li = ul.querySelectorAll("li");
  const liArrays = Array.from(li);

  const element = liArrays.filter((li) => li.innerText === "E esse?")[0];

  console.log(element);
};

const selectElementsFromList = () => {
  const section = body.querySelector("section");
  const articles = section.querySelectorAll("article");
  const articlesArray = Array.from(articles);

  articlesArray.map((article) => console.log(article));
};
