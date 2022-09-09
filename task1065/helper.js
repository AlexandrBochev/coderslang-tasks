export const hasUpperCaseLetters = (s) => {

  let result = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i].toLowerCase()) {
      result = true
      console.log(s[i].toUpperCase())
    }
    
  }
  
  return result
}