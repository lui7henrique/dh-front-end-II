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
  const form = document.querySelector("form").reset();
};

const handleCreateNewTrip = (city, country, imageUrl) => {
  const newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", index);

  const imageWrapper = document.createElement("div");
  imageWrapper.setAttribute("class", "img-wrapper");

  const image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  imageWrapper.appendChild(image);

  const infos = document.createElement("div");
  infos.setAttribute("class", "infos");

  const h3 = document.createElement("h3");
  h3.innerText = city;
  infos.appendChild(h3);

  const h4 = document.createElement("h4");
  h4.innerText = country;
  infos.appendChild(h4);

  newCard.appendChild(imageWrapper);
  newCard.appendChild(infos);

  cardList.appendChild(newCard);
};
