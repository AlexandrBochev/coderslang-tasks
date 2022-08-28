export const checkAccess = (user, password) => {
  if ((user.password === password) && (user.role === 'admin')) {
    return true;
  } else {
    return false;
  }
}

export const grantAccess = (name) => {
  console.log(`Congratulations, ${name}. Access granted.`)
}

export const denyAccess = (name) => {
  console.log(`Sorry, ${name}. Access denied.`)
}