const url =
  "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json";

const main = document.querySelector("main");

const loadData = async () => {
  const response = await fetch(url);
  const { data } = await response.json();

  const unformattedChampions = Object.values(data);
  const champions = unformattedChampions.map((champion) => {
    return {
      name: champion.name,
      title: champion.title,
      image: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
    };
  });

  champions.map((champion) => {
    const championCard = document.createElement("div");
    championCard.classList.add("champion");
    championCard.innerHTML = `
      <img src="${champion.image}" alt="${champion.name}">
      <div class="infos">
        <h2>${champion.name}</h2>
        <sub>${champion.title}</sub>
      </div>
    `;
    main.appendChild(championCard);
  });

  const button = document.querySelector("button");
  button.style.display = "none";
};
