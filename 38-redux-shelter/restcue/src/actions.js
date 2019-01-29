export function fetchedDogs(dogs) {
  return { type: 'FETCHED_DOGS', dogs: dogs }
}

export function addDog(dog) {
  return { type: 'ADD_DOG', dog: dog }
}

export function loginSuccess(user) {
  return { type: 'LOGIN_USER', user: user }
}

export function logout() {
  localStorage.clear()
  return { type: 'LOGOUT' }
}
