/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(nums){
  const results = [];
  for (let i =0; i < nums.length; i++){
    results.push(nums[i] * 2)
  }
  return results
}

const yelledGreetings= function(hi){
  const greeting = '';
  for (let i = 0; i < hi.length; i++ )
 if(hi[i] === hi[i] + '!'){
 }else{
return greeting
 }
}

const absoluteValues= function(){

}


const upperCaseFirstLetters =function(){

}


const changeToInitials = function(){

}

const doubleOdd = function(){

}


const add1ToLeft =function(){

}





/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
