const ip = document.getElementById("ip");
const home = document.getElementById("location");
const sum = document.getElementById("sum");
const end = document.getElementById("end");
const rocket = document.getElementById("rocket");
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

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled) === scrollable) {
    alert("Use The button down to go back to the top.");
  }
});

window.scroll = function () {
  document.body.scrollTop > 0 || document.documentElement > 0
    ? (end.style.display = "block")
    : (end.style.display = "none");
};

end.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

rocket.addEventListener("click", function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    rocket.style.margin = timePassed / 10 + "px";

    if (timePassed > 4000) clearInterval(timer);
  });
});
