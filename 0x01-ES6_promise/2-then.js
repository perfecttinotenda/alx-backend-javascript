/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-2
 */

export default function handleResponseFromAPI(promise) {
  return promise
    .then((resolvedValue) => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success",
      };
    })
    .catch((error) => {
      console.error("Got an error from the API");
      return new Error();
    });
}
