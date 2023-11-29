/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-0
 */


function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      
      const sampleResponse = {
        data: "Sample data from API",
      };
      
      resolve(sampleResponse);
      
    });
  }
  
  export default getResponseFromAPI;
  