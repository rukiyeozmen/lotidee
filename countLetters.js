const countLetters = function (input){
const letterCounts = {}
for(letter of input.split('')){
  if(letter !== ' '){
    if(letterCounts[letter]){
      letterCounts[letter] += 1
    }
    else{
      letterCounts[letter] =1
    }
  }
}
return letterCounts

}
console.log(countLetters("lighthouse in the house"))