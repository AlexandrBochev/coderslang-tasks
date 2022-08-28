export const errorPractice = (name, surname) => {



  if (name === undefined || surname === undefined) {
    throw new Error('Уупс!');
  } else {
    console.log(`Hey, ${name} ${surname}! Welcome to the JavaScript error practice.`)
  }
  
}



