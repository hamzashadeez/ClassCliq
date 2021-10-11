import { getUserData } from "./Authentication.js";
const user = getUserData();

const renderDataToHTML = ()=>{
    document.getElementById("username").innerText =user?.name
    document.getElementById("assignments__number").innerText =user?.assignments.length; 
    document.getElementById("total__students").innerText =user?.assignments[0].students.length; 
}

window.addEventListener("load", (event) => {
  if (user) {
    renderDataToHTML()
  } else {
    window.location = "../index.html";
  }
});


document.getElementById('logout__btn').addEventListener('click', ()=>{
    const accept = confirm("Do you want to logout?")
    if(accept){
        localStorage.setItem('user', false);
        window.location = '../index.html'
    }
})


