const letterPool = {
    A: 9,B: 2,C: 2,D: 4,E: 12,F: 2,G: 3,H: 2,I: 9,J: 1, K: 1,L: 4,M: 2,
    N: 6,O: 8,P: 2,Q: 1,R: 6,S: 4,T: 6, U: 4,V: 2,W: 2,X: 1,Y: 2,Z: 1
};

const letterScore = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2, 
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

const Adagrams = {

  // Wave one 

  drawLetters() {
    const letterPoolArray = [];

    for(const letter in letterPool){
      for(let i = 0; i < letterPool[letter]; i++) {
        letterPoolArray.push(letter);
      }
    }

    const hand = [];

    for(let i = 0; i < 10; i++){
      const randomLetters = letterPoolArray[Math.floor(Math.random() * letterPoolArray.length)];
      hand.push(randomLetters);
    }
    return hand;
  },

  // Wave two 
  usesAvailableLetters(input,lettersInHand ){
    let validWord = true;
    let userWord = input.toUpperCase().split('');

    userWord.forEach((char) => {
      let index = lettersInHand.indexOf(char);

      if(index === -1) {
        validWord = false;
      } else {
        lettersInHand.splice(index,1)
      }
    })
    return validWord;
    },

    // Wave Three 
  
  scoreWord(word) {
    let score = 0
    for(const letter of word.toUpperCase().split('')){
      score += letterScore[letter];
    }
    if (word.length >= 7) {
      score += 8;
    }
    return score;
  },
  //Wave 4

  // highestScoreFrom(words)
 

}

// Do not remove this line or your tests will break!
export default Adagrams;
