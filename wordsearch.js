const wordSearch = (letters, word) => {
    if(letters.length === 0){
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        }
    }

    let transposedMatrix = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            if(i === 0){
                transposedMatrix.push(Array(letters.length));
            }
            transposedMatrix[j][i] = letters[i][j];
        }
    }
    const verticalJoin = transposedMatrix.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)){
            return true
        }
    }

    return false;
}

module.exports = wordSearch
