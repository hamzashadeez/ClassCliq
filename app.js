// imports
import {login, getUserData} from './js/Authentication.js'

// elements
const email = document.getElementById('email')
const password = document.getElementById('password');

// actions

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const user = getUserData()
    if(user){
        window.location.href = '/pages/dashboard.html'
    }else{
        console.log('no user')
    }
  });

document.getElementById('form_login').addEventListener('submit', (e)=>{
    e.preventDefault();
    login(email.value, password.value)
})