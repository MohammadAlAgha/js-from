const ip = document.getElementById("ip");
const home = document.getElementById("location");
const sum = document.getElementById("sum");
fetch("http://ip-api.com/json/?fields=61439")
  .then((response) => response.json())
  .then((data) => {
    ip.innerHTML = `Your IP address is ${data.query} by the way ;)`;
    home.innerHTML = `And you are in ${data.country} specifically in ${data.city}.`;
    let even = data.query.replaceAll(".", "");
    // even = Number(even);
    // console.log(even);
    let counter = 0;
    for (let i = 0; i < even.length; i++) {
      if (even[i] % 2 == 0) {
        counter += Number(even[i]);
      }
    }
    sum.innerHTML = `Useless Note: The sum of the even numbers in your IP is ${counter} :)`;
  });
