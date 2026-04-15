// import { Children } from "react";

/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here
  if (age<0 || typeof age !== 'number'){
    return -1;
  }
let children = ( age >= 0 && age <= 12 )
let teens = (age > 12 && age <= 17)
let adults = (age > 17 && age <= 59)
let seniors = (age >= 60)
  if (!isWeekend){
    if(children){
      return 8;
    }
    else if( teens ) {
      return 12 ;
    }
    else if(adults) {
      return 15 ;
    }
    else {
      return 10;
    }
  }
  else {
        if(children){
      return 11;
    }
    else if( teens ) {
      return 15 ;
    }
    else if(adults) {
      return 18 ;
    }
    else {
      return 13;
    }
  }

}
