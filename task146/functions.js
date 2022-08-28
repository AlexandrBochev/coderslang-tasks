export const checkSpam = (text, spamKeywords) => {

  let lowStr = text.toLowerCase();

  let noSpam = false

  for (let i = 0; i < spamKeywords.length; i++) {
    
    if (lowStr.includes(spamKeywords[i])) {
      noSpam = true
    }

  }

  return noSpam

}