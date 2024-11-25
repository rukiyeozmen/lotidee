const args = process.argv.slice(2)

let pigLatin = ''
for(let word of args){
  if(word.length===0)return ''

    pigLatin += word.slice(1)+word[0] +'ay '
 
}
console.log(pigLatin)