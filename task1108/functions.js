export const writeLog = (m) => {
  for (let i = 0; i < m.length; i++) {
    process.stdout.write(console.log(m[i]))
  }
  
}

