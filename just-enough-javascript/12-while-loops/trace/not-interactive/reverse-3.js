let word = 'racecar';
// let word = 'bike';
// let word = 'f';
// let word = ' i o u ';
// let word = 'done.';

let reversed = '';

let index = 0;
while (index < word.length) {
  reversed = word[index] + reversed;
  index++;
}

console.log(word, reversed);
