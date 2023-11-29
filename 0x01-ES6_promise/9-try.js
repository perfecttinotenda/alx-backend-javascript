/*
 * author: Tinotenda
 * ALX Backend with JavaScript
 * 0x01-ES6_promise
 * Task-9
 */

export default function guardrail(mathFunction) {
    const queue = [];
  
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(error.message);
    } finally {
      queue.push('Guardrail was processed');
    }
  
    return queue;
  }