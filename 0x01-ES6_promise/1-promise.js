/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-1
 */

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: "Success",
      });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}