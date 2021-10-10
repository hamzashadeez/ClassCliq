import { getUserData } from "./Authentication.js";

window.addEventListener("load", (event) => {
  const user = getUserData();
  if (user) {
  } else {
    window.location = "../index.html";
  }
});
