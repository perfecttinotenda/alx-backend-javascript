/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-4
 */

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

export default signUpUser;
