const word = document.getElementById("word");
const done = document.getElementById("done");
const result = document.getElementById("result");
done.addEventListener("click", function () {
  check(word.value);
});
function check(words) {
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let j = words.length - 1 - i;
    console.log(words[i]);
    console.log(words[j]);
    if (words[i] == words[j]) {
      let portion = words.slice(i + 1, j - 1);
      console.log(portion);
      check(portion);
      if ((portion.length = 1)) {
        result.innerHTML = "This is a Palindrome!!!";
        console.log("Palindrome");
      } else {
        result.innerHTML = "Not Palindrome";
        console.log("not Palindrome");
      }
    } else {
      result.innerHTML = "Not Palindrome";
      break;
    }
  }
}
