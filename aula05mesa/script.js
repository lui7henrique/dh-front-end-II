let theme = "light";

const changeTheme = () => {
  if (theme === "light") {
    document.body.style.backgroundColor = "#f1f1f1";
    document.querySelector("button").innerText = "🌞";
    theme = "dark";
  } else {
    document.body.style.backgroundColor = "#1e1e1e";
    document.querySelector("button").innerText = "🌙";
    theme = "light";
  }
};
