let page = 1;

const ul = document.querySelector("ul");
const button = document.querySelector("button");

const handleGetData = async () => {
  const url = `https://reqres.in/api/users?page=${page}`;
  const { data } = await fetch(url).then((res) => res.json());

  data.map((user) => {
    const li = document.createElement("li");
    li.innerHTML = `
     <img src="${user.avatar}" alt="${user.first_name}">
     <div>
      <h2>${user.first_name} ${user.last_name}</h2>
      <h5>${user.email}</h5>
     </div>
    `;

    ul.appendChild(li);
  });

  page++;
  if (page > 2) {
    button.style.display = "none";
  }
};
