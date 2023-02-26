const word = document.getElementById("word");
const done = document.getElementById("done");
const result = document.getElementById("result");

done.addEventListener("click", () => {
  consonants(word.value);
});
function consonants(words) {
  let str = "";
  let newest;
  for (let i = 0; i < words.length; i++) {
    if (
      words[i] != "a" &&
      words[i] != "o" &&
      words[i] != "e" &&
      words[i] != "i" &&
      words[i] != "u"
    ) {
      str += words[i];
    } else {
      break;
    }
    newest = words.slice(i + 1, words.length);
  }
  result.innerHTML = `${newest}${str}ay :)`;
}
