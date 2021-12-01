const wordSearch = (letters, word) => {
  // Horizontal search
  const horizontalJoin = letters.map(ls => ls.join(''));
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

  // Diagonal search
  // let verticalLine = "";
  // for (let i = 0; i < letters.length; i++) {
  //   verticalLine = verticalLine.concat(letters[i][i]);
  // }
  // if (verticalLine.includes(word)) return true;

  // verticalLine = "";
  // for (let i = letters.length - 1; i >= 0; i--) {
  //   verticalLine = verticalLine.concat(letters[i][i]);
  // }
  // if (verticalLine.includes(word)) return true;

  return false;
};

module.exports = wordSearch;