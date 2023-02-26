const word = document.getElementById("word");
const done = document.getElementById("done");
const result = document.getElementById("result");
done.addEventListener("click", () => {
  reverse(word.value);
});
function reverse(words) {
  let str = "";
  for (let i = words.length - 1; i >= 0; i--) {
    str += words[i];
  }
  result.innerHTML = `The reverse of your word is: ${str}`;
}
