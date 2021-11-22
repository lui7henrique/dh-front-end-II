const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async () => {
  const users = await fetch(url).then((res) => res.json());

  users.map((user) => {
    createUserOnHTML(user);
  });
};
getUsers();

const handleSubmit = async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;

  const user = {
    name,
    username,
  };

  const postUser = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  createUserOnHTML(postUser);
};

const handleDeleteUser = async (id) => {
  // const deleteUser = await fetch(`${url}/${id}`, {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => res.json());
  const user = document.getElementById(id);
  user.remove();
};

const createUserOnHTML = (user) => {
  const ul = document.querySelector("ul");

  const userHTML = document.createElement("li");
  userHTML.setAttribute("id", user.id);
  userHTML.setAttribute("onclick", `handleDeleteUser(${user.id})`);
  userHTML.innerHTML = `
    <h2>${user.id}</h2>
    <h3>${user.name}</h3>
    <h4>${user.username}</h4>
  `;

  ul.appendChild(userHTML);
};
