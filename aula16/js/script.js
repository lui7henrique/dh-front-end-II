const url = "https://api.github.com/users/lui7henrique/repos";
const main = document.querySelector("main");

const handleGetData = async () => {
  const response = await fetch(url).then((res) => res.json());

  response.map((repo) => {
    const newCard = document.createElement("h2");
    newCard.innerText = repo.name;
    main.appendChild(newCard);
  });

  console.log(response);
};
