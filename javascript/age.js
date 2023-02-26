const age = document.getElementById("age");
const done = document.getElementById("done");
const date = new Date();
const year = date.getFullYear();
const result = document.getElementById("result");

done.addEventListener("click", () => {
  prime(age.value);
});
function prime(birth) {
  let years = year - birth;
  let isPrime = true;
  for (let i = 0; i < years / 2; i++) {
    if (years % i == 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    result.innerHTML = `You are ${years} years old , this number of years is prime`;
  } else {
    result.innerHTML = `You are ${years} years old , this number of years is NOT prime`;
  }
}
