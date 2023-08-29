function isPalindrome(word) {
  // Write your algorithm here
  let secondHalf = '';

  //is even:
  if(word.length%2 === 0 && word.length !== 0){
    let firstHalf = word.slice(0, word.length/2);
    let secondHalfPsuedo = word.slice(word.length/2);
    for(let i = secondHalfPsuedo.length-1; i >= 0; i--){
      secondHalf = secondHalf + secondHalfPsuedo[i];
    }
    if(firstHalf === secondHalf){
      return true;
    }
    else{
      return false;
    }
  }
  else if(word.length%2 !== 0){
    let firstHalf = word.length === 1 ? word : word.slice(0, (word.length-1)/2);
    let secondHalfPsuedo = word.length === 1 ? word : word.slice((word.length + 1)/2);
    for(let i = secondHalfPsuedo.length-1; i >= 0; i--){
      secondHalf = secondHalf + secondHalfPsuedo[i];
    }
    if(firstHalf === secondHalf){
      console.log('first half and second half same');
      return true;
    }
    else{
      console.log('first and second half not the same');
      return false;
    }
  }
  else{
    return false;
  }

}

isPalindrome('racecar');

/* 
  Add your pseudocode here
  
  if(word.length%2 === 0){
    return false;
  }
  else if(word.length%2 !== 0 && word.legnth !== 0){
    let firstHalf = word.slice(0,word.length)
    let secondHalf = word.slice(word.length-1)
    if(firstHalf === secondHalf){
      return true;
    }
    else{
      return false;
    }
  }


*/

/*
  Add written explanation of your solution here
  Anything with a | ab | abba | racecar | robot

  1.) word has to be interchangeable foward and backward

  for loop the string...
  and if the length of the string is an even number, it returns false automatically.

  it will begin for loop if it is odd...
  it will loop through half of the string...
  
  Or 

  if odd, slice through first half of word and slice the other half using slice().
  compare the two and if they are the same, then return true.
  if not return false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
