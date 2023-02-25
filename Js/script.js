const password = document.getElementById("password");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
var validP = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
var validE = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+).([a-z]+).([a-z]+)?$/;

users = {
  emails: "",
  passwords: "",
};

submit.addEventListener("click", store);

function store() {
  if (password.value.match(validP) && email.value.match(validE)) {
    users.emails += email.value;
    users.passwords += password.value;
    window.alert("Email & Password are saved. Press next");
  } else {
    window.alert("Invalid Email or Password");
  }

  console.log(users);
}

// let symbols = [
//   "~",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "_",
//   "-",
//   "+",
//   "=",
//   "{",
//   "[",
//   "}",
//   "]",
//   "|",
//   '":',
//   ";",
//   "<",
//   ">",
//   ".",
//   "?",
//   "/",
//   ",",
// ];

// function containsUppercase(str) {
//   return /^[A-Z]+$/.test(str);
// }
// submit.addEventListener("click", store);
// function store() {
//   if (containsUppercase(password.value)) {
//     for (let i = 0; i < symbols.length; i++) {
//       if (password.value.includes(symbols[i])) {
//         console.log(password.value);
//       } else {
//         console.log("invalid");
//       }
//     }
//   } else {
//     console.log("invalid");
//   }
// }
