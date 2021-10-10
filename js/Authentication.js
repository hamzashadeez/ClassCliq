export function login(email, password) {
  localStorage.setItem("user", JSON.stringify({ email, password }));
  window.location.href = '/pages/dashboard.html'
}

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("user") || false);
  };


