

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];         // This will hold the decoded characters
  const string = encodedStr;  //this will store the input string
  const arr = [];

  for (let i = 0; i < string.length; i++)
  {
    if (lookup[string[i]]) //if the input charater is a lookup object then it will 
							//take the value of that object and add that to the new arr[] else put the same charaxter
	{
      arr.push(lookup[string[i]]);
    } else {
      arr.push(string[i]); // Keep non-letter characters unchanged
    }
  }

  // Join the array to form the decoded string
  decodedArr = arr.join('');

  return decodedArr;
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
