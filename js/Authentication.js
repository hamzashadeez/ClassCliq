export function login(email, password) {
//   localStorage.setItem("user", JSON.stringify({ email, password }));
  localStorage.setItem("user", JSON.stringify(userData));
  window.location.href = "/pages/dashboard.html";
}

export const getUserData = () => {
  return JSON.parse(localStorage.getItem("user") || false);
};

export const userData = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  password: "*******",
  signDate: "12/10/2020",
  plan: "Free",
  moneySpent: 0,
  assignments: [
    {
      id: 1,
      title: "First Assignment",
      startedDate: "12/12/2020",
      expirationDate: "10/01/2021",
      questions: [
        {
          id: 1,
          type: "essay",
          label: "What is a noun",
        },
        {
          id: 2,
          type: "obj",
          label: "Your country is",
          options: ["Ghana", "Nigeria", "Algeria", "Japan"],
        },
      ],
      students: [
        {
          id: 1,
          reg_no: "u1/13/csc/0922",
          name: "Yasir Sagir",
          url: "www.google.com",
          email: "yasir@yahoo.com",
          mark: 100,
          response: [
            {
              id: 1,
              answer: "Noun is the name of anything",
            },
            {
              id: 2,
              answer: "Nigeria",
            },
          ],
        },
        {
          id: 2,
          reg_no: "u1/13/csc/0922",
          name: "Yasir Sagir",
          url: "www.google.com",
          email: "yasir@yahoo.com",
          mark: 100,
          response: [
            {
              id: 1,
              answer: "Noun is the name of anything",
            },
            {
              id: 2,
              answer: "Nigeria",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Second Assignment",
      startedDate: "12/12/2020",
      expirationDate: "10/01/2021",
      questions: [
        {
          id: 1,
          type: "essay",
          label: "What is a noun",
        },
        {
          id: 2,
          type: "obj",
          label: "Your country is",
          options: ["Ghana", "Nigeria", "Algeria", "Japan"],
        },
      ],
      students: [
        {
          id: 1,
          reg_no: "u1/13/csc/0922",
          name: "Yasir Sagir",
          url: "www.google.com",
          email: "yasir@yahoo.com",
          mark: 100,
          response: [
            {
              id: 1,
              answer: "Noun is the name of anything",
            },
            {
              id: 2,
              answer: "Nigeria",
            },
          ],
        },
      ],
    },
  ],
};
