const number = document.getElementById("number");

let promtNum = prompt("Enter a Number to arrange :)");
let toMerge = [];
for (let i = 0; i < promtNum.length; i++) {
  toMerge.push(promtNum[i]);
}

//Source: GeeksForGeeks
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  console.log(l);
  console.log(m);
  console.log(r);
  console.log(n1);
  console.log(n2);

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);
  console.log(L);
  console.log(R);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
  console.log(L[i]);
  console.log(R[j]);

  console.log(arr[l + i]);
  console.log(arr[m + 1 + j]);

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

mergeSort(toMerge, 0, toMerge.length - 1);
let num = toMerge.join("");

number.innerHTML = `LOOK!!! I've arranged all your numbers: ${num}`;
