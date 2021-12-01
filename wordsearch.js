const wordSearch = (letters, word) => {
  // Horizontal search
  let horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Veritcal search
  for (let i = 0; i < letters[0].length; i++) {
    let verticalLine = "";
    for (let j = 0; j < letters.length; j++) {
      verticalLine = verticalLine.concat(letters[j][i]);
    }
    if (verticalLine.includes(word)) return true;
  }

  // Horizontal backwords search
  horizontalJoin = letters.map(ls => (ls.reverse()).join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Veritcal backwords search
  for (let i = letters[0].length - 1; i >= 0; i--) {
    let verticalLine = "";
    for (let j = letters.length - 1; j >= 0; j--) {
      verticalLine = verticalLine.concat(letters[j][i]);
    }
    if (verticalLine.includes(word)) return true;
  }

  // Diagonal search
  letters.map(ls => (ls.reverse()).join(''));
  let diagonalLineUp = "", diagonalLineDown = "";
  for (let i = 0; i < letters.length - 1; i++) {
    diagonalLineUp = diagonalLineUp.concat(letters[i][i]);
    diagonalLineDown = diagonalLineDown.concat(letters[letters.length - 1 - i][letters.length - 1 - i]);
  }
  if (diagonalLineUp.includes(word)) return true;
  if (diagonalLineDown.includes(word)) return true;

  return false;
};

module.exports = wordSearch;