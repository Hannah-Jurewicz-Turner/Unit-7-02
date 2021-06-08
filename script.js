// Connects button to the comparison function
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0


function comparison () {
  // Converts user's input into an integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // Check if user input is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
