const reverseString = (string) => {
    //setting our condition for if an empty string or single character is passed in
 if(string.length <= 1){
     return string
 }
 /*  here we are using charAt to find the last letter of the string and put it at the front of the new string.
 we are then concatenating it with the function reverse string which is being called recursively here to 
 take the new letter at the end of the string and putt it the front of the string that is still being concatenated
  and will stop once the original string no loner remains and the length is zero at which point it can return the
   string reversed */
  else {
      return string.charAt(string.length -1) + reverseString(string.substring(0, string.length -1))
  }
 

}

module.exports = {reverseString}