const word = document.getElementById("word");
const done = document.getElementById("done");
const result = document.getElementById("result");
done.addEventListener("click", function () {
  check(word.value);
});
function check(words) {
  for (let i = 0; i < words.length; i++) {
    let j = words.length - 1 - i;
    if (words[i] == words[j]) {
      let portion = words.slice(i + 1, j - 1);
      check(portion);
      if ((portion.length = 1)) {
        result.innerHTML = "This is a Palindrome!!!";
      }
    } else {
      result.innerHTML = "Not Palindrome";
      break;
    }
  }
}
