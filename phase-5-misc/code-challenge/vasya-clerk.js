/**
 * The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
 * 
 * Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
  
 * Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
  
 * Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
 
 * Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

  Given: Array or List with options of 100, 50, 25

  Vasya => intial money = 0

  Result: if Vasya can sell every ticket, return YES, else return NO

 */

const avengersBrute = (line) => {
  // line has 25, 50, or 100
  let vasya = {
    25: 0,
    50: 0,
    100: 0,
  }
  let output = true
  // loop through our line
  line.forEach((cash) => {
    // Pay the man
    vasya[cash] += 1
    if (output) {
      // if not 25, then give change
      if (cash === 50) {
        // manually => if 50, then give back 25
        if (vasya[25] < 1) {
          output = false
        } else {
          vasya[25] -= 1
        }
      } else if (cash === 100) {
        // if 100, then give back either 50 + 25, or 3 x 25
        if (vasya[50] < 1 && vasya[25] < 4) {
          output = false
        } else if (vasya[50] > 0) {
          vasya[50] -= 1
          vasya[25] -= 1
        } else {
          vasya[25] -= 3
        }
      }
    }
    console.log(vasya)
  })
  return output ? "YES" : "NO"
}

// TESTING

const l1 = [25, 25, 50] // YES
const l2 = [25, 100] // NO Vasya will not have enough money to give change to 100 dollars
const l3 = [25, 25, 50, 50, 25, 25, 25, 25, 100, 100, 100] // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

console.log("TESTING")
// avengersBrute(l1) === "YES"
// console.log(avengersBrute(l1), "YES")
// console.log(avengersBrute(l2), "NO")
console.log(avengersBrute(l3), "YES")
