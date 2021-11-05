const index = 0;

const cardList = document.getElementsByClassName("card-list")[0];

const handleAddNewTrip = (event) => {
  event.preventDefault();
  const { elements } = event.target;

  const city = elements[0].value;
  const country = elements[1].value;
  const imageUrl = elements[2].value;

  handleCreateNewTrip(city, country, imageUrl);
  resetInput();
};

const resetInput = () => {
  document.querySelector("form").reset();
};

const handleCreateNewTrip = (city, country, imageUrl) => {
  const newCard = document.createElement("div");
  newCard.innerHTML = `
    <div class="card">
      <div class="img-wrapper">
        <img
          src="${imageUrl}"
          alt="${city} image"
        />
      </div>
      <div class="infos">
        <h3>${city}</h3>
        <h4>${country}</</h4>
      </div>
    </div>`;

  cardList.appendChild(newCard);
};
