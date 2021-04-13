// const fn = function() {}

const fn = () => {
  return () => {
    console.log("yet more razzling")
  }
}

// const fnTest = fn()
// console.log(fnTest())
// fn()
// ;(num) => {
//   console.log("akshdfgsa" + num)
// }

// func(2)

const destTest = (ride) => {
  if (ride <= 400) {
    return "cheap"
  } else if (ride > 2500) {
    return "no way"
  } else {
    return "30 buycks"
  }
}
console.log(
  destTest(350) == "cheap",
  destTest(2001) == "no way",
  destTest(2000) == "30 buycks"
)

const standingIf = (x) => {
  if (x == 1) {
    console.log("hi")
  } else {
    console.log("bye")
  }

  if (x - 1 === 0) {
    console.log("aksfhgaskfjh")
  }
}
standingIf(1)

// fizzBuzz
