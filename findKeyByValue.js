const findKeyByValue = function(obj,value){
for(let key of Object.keys(obj)){
  console.log('key: ',key)
  console.log('obj[key]', obj[key])
  if(obj[key]===value){
    return key
  }
}
return undefined
}
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));