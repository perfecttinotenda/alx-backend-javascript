/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-3
 */

import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(
        `${photoResult.body} ${userResult.firstName} ${userResult.lastName}`
      );
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

export default handleProfileSignup;
