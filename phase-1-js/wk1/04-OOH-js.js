function runFiveMiles() {
  console.log("running")
}

function postRunAct() {
  console.log("I ran so far away")
}

function liftWeights() {
  console.log("Pump iron")
}

function swimFortyLaps() {
  console.log("Swim 40 laps")
}

function Monday() {
  runFiveMiles()
  postRunAct()
}

Monday()

function exerciseRoutine(passingFunc = postRunAct) {
  console.log("in exer")
  // this is a static function => always the same
  runFiveMiles()
  // this is a dynamic function => changes with args
  passingFunc()
}

// const postRunFunc = () => console.log("START!")
// exerciseRoutine(postRunFunc)

function morningRoutine(exercise) {
  let breakfast

  if (exercise === liftWeights) {
    breakfast = "protein bar"
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie"
  } else {
    breakfast = "granola"
  }

  exerciseRoutine(exercise)

  // we could give this function a name if we wanted to, but since
  // it's only available _inside_ morningRoutine(), we don't need to
  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`)
  }
}

const afterExercise = morningRoutine(liftWeights)

console.log(afterExercise)
afterExercise()
