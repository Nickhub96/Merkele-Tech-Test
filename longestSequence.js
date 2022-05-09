const longestSequence = (str) => {
    const newStr = str.toLowerCase()
    const length = newStr.length
    let obj = {};
    let finalObject = {};
    let result = newStr[0];
    let count = 0;
    let currentCount = 1;
    let finalResult;
  
   // condition for if a an empty string is passed
    if(length < 1){
        return obj
    }

    for(let i = 0; i < length; i++){ 
        // checking we are not at the end of the string and that the following character is indeed the same as the character we are checking
        if(i < length-1 && newStr[i] == newStr[i+1]){
        //if the characters are the same add 1 to our count
            currentCount++
        } else{
        /*when we find that the next character in the iteration is not the same as the current one we must 
        finish off our count of consecutive characters and apply the count to the character within an object*/
            if(currentCount > count){
                count = currentCount;
                result = newStr[i];     
            }
            currentCount = 1;
            obj[result] = count
        }
    }
    /*we use reduce here to return the key with the highest value from our object and again apply the 
    count to it inside an object and return the character that was repeated the most consecutively */
    finalResult = Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b);
    finalObject[finalResult] = count;

  return finalObject;

}

module.exports = {longestSequence}